import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface InteractiveCameraAnchorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
OverrideRoot?: member<any>;
FieldOfView?: member<number>;
Highlighted?: member<boolean>;
InUse?: member<any>;
    }
    
    export function InteractiveCameraAnchor(props: InteractiveCameraAnchorInput){
      const { id, persistentId, updateOrder, Enabled,
OverrideRoot,
FieldOfView,
Highlighted,
InUse, } = props;
    
      return (
        <Component type="FrooxEngine.InteractiveCameraAnchor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="OverrideRoot" id={typeof OverrideRoot === "object" && "id" in OverrideRoot ? OverrideRoot?.id : undefined} value={typeof OverrideRoot === "object" && "value" in OverrideRoot ? OverrideRoot?.value : OverrideRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FieldOfView" id={typeof FieldOfView === "object" && "id" in FieldOfView ? FieldOfView?.id : undefined} value={typeof FieldOfView === "object" && "value" in FieldOfView ? FieldOfView?.value : FieldOfView} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Highlighted" id={typeof Highlighted === "object" && "id" in Highlighted ? Highlighted?.id : undefined} value={typeof Highlighted === "object" && "value" in Highlighted ? Highlighted?.value : Highlighted} /* default: false */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="InUse" id={typeof InUse === "object" && "id" in InUse ? InUse?.id : undefined} value={typeof InUse === "object" && "value" in InUse ? InUse?.value : InUse} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
        </Component>
      );
    };
    