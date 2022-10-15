import { validate, v4 as uuidV4 } from "uuid";

import { User } from "../../../modules/users/model/User";

describe("User model", () => {
  it("should be able to create an user with all props", () => {
    const user = new User(
      uuidV4(),
      "Atlas",
      false,
      "atlas@fromspace.com",
      new Date(),
      new Date()
    );

    expect(user).toMatchObject({
      name: "Atlas",
      email: "atlas@fromspace.com",
      admin: false,
    });
    expect(validate(user.id)).toBe(true);
    expect(user.created_at).toBeInstanceOf(Date);
    expect(user.updated_at).toBeInstanceOf(Date);
  });
});
