import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AxisAlignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AutoAddChildren?: member<boolean>;
Direction?: member<any>;
GlobalAxisXAlign?: member<any>;
GlobalAxisYAlign?: member<any>;
GlobalAxisZAlign?: member<any>;
ElementAxisXAlign?: member<any>;
ElementAxisYAlign?: member<any>;
ElementAxisZAlign?: member<any>;
Separation?: member<number>;
    }
    
    export function AxisAligner(props: AxisAlignerInput){
      const { id, persistentId, updateOrder, Enabled,
AutoAddChildren,
Direction,
GlobalAxisXAlign,
GlobalAxisYAlign,
GlobalAxisZAlign,
ElementAxisXAlign,
ElementAxisYAlign,
ElementAxisZAlign,
Separation, } = props;
    
      return (
        <Component type="FrooxEngine.AxisAligner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoAddChildren" id={typeof AutoAddChildren === "object" && "id" in AutoAddChildren ? AutoAddChildren?.id : undefined} value={typeof AutoAddChildren === "object" && "value" in AutoAddChildren ? AutoAddChildren?.value : AutoAddChildren} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AxisAligner+AxisDir]`} name="Direction" id={typeof Direction === "object" && "id" in Direction ? Direction?.id : undefined} value={typeof Direction === "object" && "value" in Direction ? Direction?.value : Direction} /* default: Xpos */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AxisAligner+Align]`} name="GlobalAxisXAlign" id={typeof GlobalAxisXAlign === "object" && "id" in GlobalAxisXAlign ? GlobalAxisXAlign?.id : undefined} value={typeof GlobalAxisXAlign === "object" && "value" in GlobalAxisXAlign ? GlobalAxisXAlign?.value : GlobalAxisXAlign} /* default: Neg */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AxisAligner+Align]`} name="GlobalAxisYAlign" id={typeof GlobalAxisYAlign === "object" && "id" in GlobalAxisYAlign ? GlobalAxisYAlign?.id : undefined} value={typeof GlobalAxisYAlign === "object" && "value" in GlobalAxisYAlign ? GlobalAxisYAlign?.value : GlobalAxisYAlign} /* default: Neg */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AxisAligner+Align]`} name="GlobalAxisZAlign" id={typeof GlobalAxisZAlign === "object" && "id" in GlobalAxisZAlign ? GlobalAxisZAlign?.id : undefined} value={typeof GlobalAxisZAlign === "object" && "value" in GlobalAxisZAlign ? GlobalAxisZAlign?.value : GlobalAxisZAlign} /* default: Neg */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AxisAligner+Align]`} name="ElementAxisXAlign" id={typeof ElementAxisXAlign === "object" && "id" in ElementAxisXAlign ? ElementAxisXAlign?.id : undefined} value={typeof ElementAxisXAlign === "object" && "value" in ElementAxisXAlign ? ElementAxisXAlign?.value : ElementAxisXAlign} /* default: Neg */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AxisAligner+Align]`} name="ElementAxisYAlign" id={typeof ElementAxisYAlign === "object" && "id" in ElementAxisYAlign ? ElementAxisYAlign?.id : undefined} value={typeof ElementAxisYAlign === "object" && "value" in ElementAxisYAlign ? ElementAxisYAlign?.value : ElementAxisYAlign} /* default: Neg */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AxisAligner+Align]`} name="ElementAxisZAlign" id={typeof ElementAxisZAlign === "object" && "id" in ElementAxisZAlign ? ElementAxisZAlign?.id : undefined} value={typeof ElementAxisZAlign === "object" && "value" in ElementAxisZAlign ? ElementAxisZAlign?.value : ElementAxisZAlign} /* default: Neg */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Separation" id={typeof Separation === "object" && "id" in Separation ? Separation?.id : undefined} value={typeof Separation === "object" && "value" in Separation ? Separation?.value : Separation} /* default: 0 */  />
        </Component>
      );
    };
    