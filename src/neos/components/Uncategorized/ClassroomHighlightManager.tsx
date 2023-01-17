import { member, Member, Component } from "../../core";
    
    export interface ClassroomHighlightManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ActiveHighlight?: member<any>;
    }
    
    export function ClassroomHighlightManager(props: ClassroomHighlightManagerInput){
      const { id, persistentId, updateOrder, Enabled,
ActiveHighlight, } = props;
    
      return (
        <Component type="BusinessX.ClassroomHighlightManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[BusinessX.ClassroomHighlight]`} name="ActiveHighlight" id={typeof ActiveHighlight === "object" && "id" in ActiveHighlight ? ActiveHighlight?.id : undefined} value={typeof ActiveHighlight === "object" && "value" in ActiveHighlight ? ActiveHighlight?.value : ActiveHighlight} /* default: ID0 */  />
        </Component>
      );
    };
    