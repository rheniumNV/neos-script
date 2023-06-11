import { member, Member, Component } from "../../../core";
    
    export interface CopyGlobalScaleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
NonUniform?: member<boolean>;
_scaleDrive?: member<any>;
    }
    
    export function CopyGlobalScale(props: CopyGlobalScaleInput){
      const { id, persistentId, updateOrder, Enabled,
Source,
NonUniform,
_scaleDrive, } = props;
    
      return (
        <Component type="FrooxEngine.CopyGlobalScale" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="NonUniform" id={typeof NonUniform === "object" && "id" in NonUniform ? NonUniform?.id : undefined} value={typeof NonUniform === "object" && "value" in NonUniform ? NonUniform?.value : NonUniform} /* default: false */  isRaw={typeof NonUniform === "object" && "isRaw" in NonUniform && NonUniform.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_scaleDrive" id={typeof _scaleDrive === "object" && "id" in _scaleDrive ? _scaleDrive?.id : undefined} value={typeof _scaleDrive === "object" && "value" in _scaleDrive ? _scaleDrive?.value : _scaleDrive} /* default: ID0 */  isRaw={typeof _scaleDrive === "object" && "isRaw" in _scaleDrive && _scaleDrive.isRaw ? true : undefined} />
        </Component>
      );
    };
    