import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface UVAtlasAnimatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ScaleField?: member<any>;
OffsetField?: member<any>;
AtlasInfo?: member<any>;
Frame?: member<number>;
    }
    
    export function UVAtlasAnimator(props: UVAtlasAnimatorInput){
      const { id, persistentId, updateOrder, Enabled,
ScaleField,
OffsetField,
AtlasInfo,
Frame, } = props;
    
      return (
        <Component type="FrooxEngine.UVAtlasAnimator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="ScaleField" id={typeof ScaleField === "object" && "id" in ScaleField ? ScaleField?.id : undefined} value={typeof ScaleField === "object" && "value" in ScaleField ? ScaleField?.value : ScaleField} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="OffsetField" id={typeof OffsetField === "object" && "id" in OffsetField ? OffsetField?.id : undefined} value={typeof OffsetField === "object" && "value" in OffsetField ? OffsetField?.value : OffsetField} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.AtlasInfo]`} name="AtlasInfo" id={typeof AtlasInfo === "object" && "id" in AtlasInfo ? AtlasInfo?.id : undefined} value={typeof AtlasInfo === "object" && "value" in AtlasInfo ? AtlasInfo?.value : AtlasInfo} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Frame" id={typeof Frame === "object" && "id" in Frame ? Frame?.id : undefined} value={typeof Frame === "object" && "value" in Frame ? Frame?.value : Frame} /* default: 0 */  />
        </Component>
      );
    };
    