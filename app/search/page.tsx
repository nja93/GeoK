import db from '@/db'

const Search = async ({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const q = searchParams['q'] ?? ''
  const data = await db.query.search.findMany({
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


  return (
    <div>
      <div>Search</div>
      <div>
        <table>
          <thead>
            <th>Membership No.</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Phone Number</th>
            <th>Email</th>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.membershipNo}</td>
                  <td>{`${item.profile?.firstName} ${item.profile?.lastName}`}</td>
                  <td>{item.title}</td>
                  <td>{item.profile?.phone1}</td>
                  <td><a href={`mailto:${item.profile?.email}`}>{item.profile?.email}</a></td>
                </tr>)
            })}

          </tbody>
        </table>
      </div>
    </div>
  )

}

export default Search