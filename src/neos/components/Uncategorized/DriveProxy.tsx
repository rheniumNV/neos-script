import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface DriveProxyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Drive?: member<any>;
    }
    
    export function DriveProxy(props: DriveProxyInput){
      const { id, persistentId, updateOrder, Enabled,
Drive, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.DriveProxy" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ILinkRef]`} name="Drive" id={typeof Drive === "object" && "id" in Drive ? Drive?.id : undefined} value={typeof Drive === "object" && "value" in Drive ? Drive?.value : Drive} /* default: ID0 */  />
        </Component>
      );
    };
    