import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface StaticCameraDeviceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Owner?: member<any>;
FieldOfView?: member<number>;
AspectRatio?: member<number>;
    }
    
    export function StaticCameraDevice(props: StaticCameraDeviceInput){
      const { id, persistentId, updateOrder, Enabled,
Owner,
FieldOfView,
AspectRatio, } = props;
    
      return (
        <Component type="FrooxEngine.StaticCameraDevice" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="Owner" id={typeof Owner === "object" && "id" in Owner ? Owner?.id : undefined} value={typeof Owner === "object" && "value" in Owner ? Owner?.value : Owner} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FieldOfView" id={typeof FieldOfView === "object" && "id" in FieldOfView ? FieldOfView?.id : undefined} value={typeof FieldOfView === "object" && "value" in FieldOfView ? FieldOfView?.value : FieldOfView} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AspectRatio" id={typeof AspectRatio === "object" && "id" in AspectRatio ? AspectRatio?.id : undefined} value={typeof AspectRatio === "object" && "value" in AspectRatio ? AspectRatio?.value : AspectRatio} /* default: 0 */  />
        </Component>
      );
    };
    