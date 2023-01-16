import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ExpanderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SectionRoot?: member<any>;
    }
    
    export function Expander(props: ExpanderInput){
      const { id, persistentId, updateOrder, Enabled,
SectionRoot, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.Expander" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="SectionRoot" id={typeof SectionRoot === "object" && "id" in SectionRoot ? SectionRoot?.id : undefined} value={typeof SectionRoot === "object" && "value" in SectionRoot ? SectionRoot?.value : SectionRoot} /* default: ID0 */  />
        </Component>
      );
    };
    