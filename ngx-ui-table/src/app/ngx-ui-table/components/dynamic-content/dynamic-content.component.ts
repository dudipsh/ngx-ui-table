import {ChangeDetectionStrategy, Compiler, Component, Input, NgModule, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicContentComponent implements OnInit {
  @Input() row;
  @Input() column;
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  // changed to component //
  @Input('templateString')  set setTemplateString(tplString) {
    if (tplString) {
      this.compiler.clearCache();
      const component = Component({
        template: tplString,
      })(class {});

      // Define the module using NgModule decorator.
      const module = NgModule({
        declarations: [component]
      })(class {});

      // Asynchronously (recommended) compile the module and the component.
      this.compiler.compileModuleAndAllComponentsAsync(module)
        .then(factories => {
          // Get the component factory.
          const componentFactory = factories.componentFactories[0];
          // Create the component and add to the view.
          const componentRef = this.container.createComponent(componentFactory);
          componentRef.instance.row = this.row;
          componentRef.instance.column = this.column;
        });
    }
  };
  constructor(private compiler: Compiler) {}

  ngOnInit() {

  }

}
