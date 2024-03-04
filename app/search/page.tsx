import db from '@/db'
import { Fragment } from "react";
import SearchBox from '@/components/SearchBox'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const Search = async ({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const q = searchParams['q'] ?? ''
  let data: any[] = []
  if (q?.length) {
    data = await db.query.search.findMany({
      where: (search, { ilike, or }) => or(ilike(search.membershipNo, `%${q}%`), ilike(search.title, `%${q}%`)),
      with: {
        profile: {
          columns: {
            firstName: true,
            lastName: true,
            profilePhoto: true,
            email: true,
            phone1: true,
          },
          with: {
            profileSpecializations: {
              with: {
                specialization: {
                  columns: {
                    title: true,
                  }
                }
              }
            },
          }
        }
      }
    })
  }
  const specializations: any[] = data.reduce((acc: any, curr: any) => {
    const specialization = acc.find((s: any) => s.name! === curr.title);
    const person = {
      membershipNo: curr.membershipNo,
      name: `${curr.profile?.firstName} ${curr.profile?.lastName}`,
      specialization: curr.title,
      email: curr.profile?.email ?? 'n/a',
      phone: curr.profile?.phone1 ?? 'n/a',
    };
    if (specialization) {
      // const people = [...specialization.people, person]
      // acc[curr.title] = people;
      specialization.people.push(person);
    } else {
      acc.push({ name: curr.title, people: [person] });
    }
    return acc;
  }, []);


  return (
    <div
      style={{ backgroundImage: "url(/basalts.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <SearchBox />
        <div className="sm:flex sm:items-center">
          {/* <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div> */}
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 rounded-lg">
              <table className="min-w-full shadow-lg">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                    >
                      Membership No
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {specializations.length === 0 && (
                    <tr >
                      <td colSpan={5} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3 text-center">
                        No records found for {q}
                      </td>

                    </tr>)}
                  {specializations.map((specialization) => (
                    <Fragment key={specialization.name}>
                      <tr className="border-t border-gray-200">
                        <th
                          colSpan={5}
                          scope="colgroup"
                          className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                        >
                          {specialization.name}
                        </th>
                      </tr>
                      {specialization.people.map((person: any, personIdx: number) => (
                        <tr
                          key={person.membershipNo}
                          className={classNames(
                            personIdx === 0
                              ? "border-gray-300"
                              : "border-gray-200",
                            "border-t"
                          )}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                            {person.membershipNo}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.phone}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <a href={`mailto:${person.email}`}>{person.email}</a>
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Search