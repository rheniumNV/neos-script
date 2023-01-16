import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface SnapLineInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Point0?: member<[number, number, number]>;
Point1?: member<[number, number, number]>;
Anchor0?: member<any>;
Anchor1?: member<any>;
SnapParent?: member<any>;
    }
    
    export function SnapLine(props: SnapLineInput){
      const { id, persistentId, updateOrder, Enabled,
Point0,
Point1,
Anchor0,
Anchor1,
SnapParent, } = props;
    
      return (
        <Component type="FrooxEngine.SnapLine" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Point0" id={typeof Point0 === "object" && "id" in Point0 ? Point0?.id : undefined} value={typeof Point0 === "object" && "value" in Point0 ? Point0?.value : Point0} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Point1" id={typeof Point1 === "object" && "id" in Point1 ? Point1?.id : undefined} value={typeof Point1 === "object" && "value" in Point1 ? Point1?.value : Point1} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Anchor0" id={typeof Anchor0 === "object" && "id" in Anchor0 ? Anchor0?.id : undefined} value={typeof Anchor0 === "object" && "value" in Anchor0 ? Anchor0?.value : Anchor0} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Anchor1" id={typeof Anchor1 === "object" && "id" in Anchor1 ? Anchor1?.id : undefined} value={typeof Anchor1 === "object" && "value" in Anchor1 ? Anchor1?.value : Anchor1} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="SnapParent" id={typeof SnapParent === "object" && "id" in SnapParent ? SnapParent?.id : undefined} value={typeof SnapParent === "object" && "value" in SnapParent ? SnapParent?.value : SnapParent} /* default: ID0 */  />
        </Component>
      );
    };
    