import { member, Member, Component } from "../../core";
    
    export interface VRIKInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AutoUpdate?: member<boolean>;
FixTransformsEnabled?: member<boolean>;
Solver?: member<any>;
componentInitiated?: member<boolean>;
_drives?: member<any>;
    }
    
    export function VRIK(props: VRIKInput){
      const { id, persistentId, updateOrder, Enabled,
AutoUpdate,
FixTransformsEnabled,
Solver,
componentInitiated,
_drives, } = props;
    
      return (
        <Component type="FrooxEngine.FinalIK.VRIK" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoUpdate" id={typeof AutoUpdate === "object" && "id" in AutoUpdate ? AutoUpdate?.id : undefined} value={typeof AutoUpdate === "object" && "value" in AutoUpdate ? AutoUpdate?.value : AutoUpdate} /* default: false */  isRaw={typeof AutoUpdate === "object" && "isRaw" in AutoUpdate && AutoUpdate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FixTransformsEnabled" id={typeof FixTransformsEnabled === "object" && "id" in FixTransformsEnabled ? FixTransformsEnabled?.id : undefined} value={typeof FixTransformsEnabled === "object" && "value" in FixTransformsEnabled ? FixTransformsEnabled?.value : FixTransformsEnabled} /* default: false */  isRaw={typeof FixTransformsEnabled === "object" && "isRaw" in FixTransformsEnabled && FixTransformsEnabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FinalIK.IKSolverVR`} name="Solver" id={typeof Solver === "object" && "id" in Solver ? Solver?.id : undefined} value={typeof Solver === "object" && "value" in Solver ? Solver?.value : Solver} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.FinalIK\.IKSolverVR,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof Solver === "object" && "isRaw" in Solver && Solver.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="componentInitiated" id={typeof componentInitiated === "object" && "id" in componentInitiated ? componentInitiated?.id : undefined} value={typeof componentInitiated === "object" && "value" in componentInitiated ? componentInitiated?.value : componentInitiated} /* default: false */  isRaw={typeof componentInitiated === "object" && "isRaw" in componentInitiated && componentInitiated.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FinalIK.VRIK+BoneDrive]`} name="_drives" id={typeof _drives === "object" && "id" in _drives ? _drives?.id : undefined} value={typeof _drives === "object" && "value" in _drives ? _drives?.value : _drives} /* default: FrooxEngine.SyncList`1[FrooxEngine.FinalIK.VRIK+BoneDrive] */  isRaw={typeof _drives === "object" && "isRaw" in _drives && _drives.isRaw ? true : undefined} />
        </Component>
      );
    };
    