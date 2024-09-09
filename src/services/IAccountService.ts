export default interface IAccountService {
  signup(req: any, res: any): Promise<void>
  getAccount(req: any, res:any): Promise<void>
}