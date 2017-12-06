import { FrameworkConfiguration } from 'aurelia-framework';
import { configure } from '../../src/ts-sass-sample-plugin';

describe('the configure function', () => {

  let configuration: FrameworkConfiguration;

  beforeEach(() => {
    configuration = jasmine.createSpyObj('configuration', ['globalResources']);
  });

  it('should register a global resource', () => {
    configure(configuration);
    expect(configuration.globalResources).toHaveBeenCalledWith(['./hello-world']);
  });
});