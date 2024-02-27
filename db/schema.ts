import { relations } from "drizzle-orm";
import { bigint, pgTable, serial, text, unique } from "drizzle-orm/pg-core";



export const specialization = pgTable("specialization", {
	id: serial("id").primaryKey().notNull(),
	title: text("title").notNull(),
	description: text("description"),
});

export const profile = pgTable("profile", {
	id: serial("id").primaryKey().notNull(),
	firstName: text("first_name").notNull(),
	middleName: text("middle_name"),
	lastName: text("last_name").notNull(),
	email: text("email"),
	phone1: text("phone_1").notNull(),
	phone2: text("phone_2"),
	website: text("website"),
	organization: text("organization"),
	membershipNo: text("membership_no"),
	profilePhoto: text("profile_photo"),
},
	(table) => {
		return {
			profileEmailKey: unique("profile_email_key").on(table.email),
			profileMembershipNoKey: unique("profile_membership_no_key").on(table.membershipNo),
		}
	});

export const profileSpecialization = pgTable("profile_specialization", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	profileId: bigint("profile_id", { mode: "number" }).notNull().references(() => profile.id),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	specializationId: bigint("specialization_id", { mode: "number" }).notNull().references(() => specialization.id),
});

export const search = pgTable("search", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	profileId: bigint("profile_id", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	specializationId: bigint("specialization_id", { mode: "number" }),
	membershipNo: text("membership_no"),
	title: text("title"),
});

export const profileRelations = relations(profile, ({ many }) => ({
	profileSpecializations: many(profileSpecialization),
}));

export const specializationRelations = relations(
	specialization,
	({ many }) => ({
		profileSpecializations: many(profileSpecialization),
	})
);

export const profileSpecializationRelations = relations(
	profileSpecialization,
	({ one }) => ({
		profile: one(profile, {
			fields: [profileSpecialization.profileId],
			references: [profile.id],
		}),
		specialization: one(specialization, {
			fields: [profileSpecialization.specializationId],
			references: [specialization.id],
		}),
	})
);

export const searchRelations = relations(search, ({ one }) => ({
	profile: one(profile, {
		fields: [search.profileId],
		references: [profile.id],
	}),
	specialization: one(specialization, {
		fields: [search.specializationId],
		references: [specialization.id],
	}),
}));