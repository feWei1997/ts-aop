import Provide from "../lib/di/Provide"

@Provide()
class LogService {
  public info(...args: any[]) {
    console.info('[INFO]', new Date(), ...args)
  }

  public error(...args: any[]) {
    console.error('[ERR]', new Date(), ...args)
  }
}

export default LogService