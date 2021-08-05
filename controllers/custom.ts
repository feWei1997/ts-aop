import Inject from "../lib/di/Inject";
import Provide from "../lib/di/Provide";
import LogService from "../services/log";

@Provide()
class CustomerController {
  @Inject()
  private log!: LogService;

  public main() {
    this.log?.info('run..')
  }
}

export default CustomerController