import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ReferenceProxySourceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Reference?: member<any>;
    }
    
    export function ReferenceProxySource(props: ReferenceProxySourceInput){
      const { id, persistentId, updateOrder, Enabled,
Reference, } = props;
    
      return (
        <Component type="FrooxEngine.ReferenceProxySource" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef`} name="Reference" id={typeof Reference === "object" && "id" in Reference ? Reference?.id : undefined} value={typeof Reference === "object" && "value" in Reference ? Reference?.value : Reference} /* default: ID0 */  />
        </Component>
      );
    };
    