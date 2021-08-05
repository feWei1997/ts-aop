import Container from './Container'
export interface ConstructableFunction extends Function {
  new (): any;
}

const Provide = (): ClassDecorator => (target: Function) => {
  console.log('provide')
  if (Container.has(target.name)) {
    throw new Error("已经被注册");
  } else {
    Container.set(target.name, target);
  }
};

export default Provide