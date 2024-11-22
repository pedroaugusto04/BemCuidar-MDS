import { createRequest, createResponse } from "node-mocks-http";
import { comparePasswords } from "../../utils/bcryptUtils";
import { LoginService } from "../../services/login.service";
import { LoginController } from "../login.controller";

jest.mock("../../utils/bcryptUtils", () => ({
  comparePasswords: jest.fn().mockReturnValue(true),
}));

jest.mock("../../services/login.service", () => {
  const { userMock } = require("./mocks/UserMock");
  return {
    LoginService: {
      authenticateLogin: jest.fn().mockReturnValue(userMock),
    },
  };
});

describe("Login controller tests", () => {
  let req: any;
  let res: any;
  beforeEach(() => {
    req = createRequest({
      method: "POST",
      url: "/login",
    });
    req.body = { email: "user@gmail.com", password: "123" };
    res = createResponse();
    jest.clearAllMocks();
  });

  it("Should return status 200 and token if correct credentials", async () => {
    await LoginController.loginUser(req, res);

    expect(res.statusCode).toEqual(200);
    expect(res._getJSONData().token).toBeTruthy();
  });

  it("Should return 401 and NOT return token if invalid credentials", async () => {
    req.body = { email: "user@gmail.com", password: "1234" }; // incorrect

    (comparePasswords as jest.Mock).mockReturnValue(false);

    await LoginController.loginUser(req, res);
    expect(res.statusCode).toEqual(401);
    expect(res._getJSONData().token).not.toBeTruthy();
  });

  it("Should  call service authenticate with user email", async () => {
    await LoginController.loginUser(req, res);

    const email = req.body.email;
    expect(LoginService.authenticateLogin).toHaveBeenCalledTimes(1);
    expect(LoginService.authenticateLogin).toHaveBeenLastCalledWith(email);
  });

  it("Should  call compare passwords with password and expected password", async () => {
    await LoginController.loginUser(req, res);

    const user = await LoginService.authenticateLogin(req.body.email);

    expect(comparePasswords).toHaveBeenCalledTimes(1);

    expect(comparePasswords).toHaveBeenCalledWith(
      req.body.password,
      user!.password
    );
  });
});
