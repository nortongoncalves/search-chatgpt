export class Upload {
  constructor(private readonly data: string) {}

  getData(): string {
    return this.data;
  }
}
