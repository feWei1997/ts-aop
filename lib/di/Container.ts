type serviceAlias = string | symbol;

class Container {
  private ContainerMap = new Map<serviceAlias, any>();
  constructor() {
    console.log('container found')
  }

  public get<T extends any>(id: serviceAlias): T {
    const Instance =  this.ContainerMap.get(id);
    return new Instance()
  }

  public set(id: serviceAlias, value: any) {
    this.ContainerMap.set(id, value);
    console.log('set', this.ContainerMap)
  }

  public has(id: serviceAlias) {
    return this.ContainerMap.has(id);
  }
}

export default new Container()