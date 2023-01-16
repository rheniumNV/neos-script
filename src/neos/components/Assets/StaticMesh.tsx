import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface StaticMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
URL?: member<any>;
Readable?: member<boolean>;
    }
    
    export function StaticMesh(props: StaticMeshInput){
      const { id, persistentId, updateOrder, Enabled,
URL,
Readable, } = props;
    
      return (
        <Component type="FrooxEngine.StaticMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Readable" id={typeof Readable === "object" && "id" in Readable ? Readable?.id : undefined} value={typeof Readable === "object" && "value" in Readable ? Readable?.value : Readable} /* default: false */  />
        </Component>
      );
    };
    