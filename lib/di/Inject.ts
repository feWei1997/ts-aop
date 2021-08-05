import Container from "./Container";

const Inject =
  (): PropertyDecorator => (target: Object, propertyKey: string | symbol) => {
    const TargetService = Reflect.getMetadata("design:type", target, propertyKey)
    const _dependency = Container.get(TargetService.name)
    Reflect.defineProperty(target, propertyKey, {
      value: _dependency,
    })
  };

export default Inject
