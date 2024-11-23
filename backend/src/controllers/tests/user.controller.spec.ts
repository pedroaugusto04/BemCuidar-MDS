import { createRequest, createResponse } from "node-mocks-http";
import { userMock, userMockDTO } from "./mocks/UserMock";
import { UserController } from "../user.controller";
import { UserService } from "../../services/user.service";
import { hashPassword } from "../../utils/bcryptUtils";

jest.mock("../../utils/bcryptUtils", () => ({
  hashPassword: jest.fn().mockReturnValue("cryptoPass"),
}));

jest.mock("../../services/user.service", () => {
  const { userMockCryptoPass } = require("./mocks/UserMock");
  return {
    UserService: {
      createUser: jest.fn().mockReturnValue(userMockCryptoPass),
    },
  };
});

describe("User controller tests", () => {
  let req: any
  let res: any
  beforeEach(() => {
    req = createRequest({
      method: "POST",
      url: "/users",
      body: userMock,
    });
    res = createResponse();
    jest.clearAllMocks();
  });

  it("Should hash password when creating a user", async () => {
    
    const initialPass = req.body.password;

    await UserController.createUser(req, res);

    expect(hashPassword).toHaveBeenCalledTimes(1);

    expect(hashPassword).toHaveBeenCalledWith(initialPass);

    const cryptoPass = "cryptoPass";

    expect(UserService.createUser).toHaveBeenCalledTimes(1);

    expect(UserService.createUser).toHaveBeenCalledWith(
      expect.objectContaining({
        password: cryptoPass,
      })
    );
  });

  it("Should hide password when returning a created user", async () => {

    await UserController.createUser(req, res);

    expect(res.statusCode).toEqual(201);
    expect(res._getJSONData()).toEqual(userMockDTO);
  });

});
