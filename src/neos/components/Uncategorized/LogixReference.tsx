import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface LogixReferenceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
RefNode?: member<any>;
RefTarget?: member<any>;
    }
    
    export function LogixReference(props: LogixReferenceInput){
      const { id, persistentId, updateOrder, Enabled,
RefNode,
RefTarget, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.LogixReference" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.LogiX.IReferenceNode]`} name="RefNode" id={typeof RefNode === "object" && "id" in RefNode ? RefNode?.id : undefined} value={typeof RefNode === "object" && "value" in RefNode ? RefNode?.value : RefNode} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IWorldElement]`} name="RefTarget" id={typeof RefTarget === "object" && "id" in RefTarget ? RefTarget?.id : undefined} value={typeof RefTarget === "object" && "value" in RefTarget ? RefTarget?.value : RefTarget} /* default: ID0 */  />
        </Component>
      );
    };
    