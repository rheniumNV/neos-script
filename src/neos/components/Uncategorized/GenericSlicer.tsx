import { member, Member, Component } from "../../core";
    
    export interface GenericSlicerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Targets?: member<any>;
Space?: member<any>;
_grabbedVisual?: member<any>;
    }
    
    export function GenericSlicer(props: GenericSlicerInput){
      const { id, persistentId, updateOrder, Enabled,
Targets,
Space,
_grabbedVisual, } = props;
    
      return (
        <Component type="FrooxEngine.GenericSlicer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.GenericSlicer+SliceDrive]`} name="Targets" id={typeof Targets === "object" && "id" in Targets ? Targets?.id : undefined} value={typeof Targets === "object" && "value" in Targets ? Targets?.value : Targets} /* default: FrooxEngine.SyncList`1[FrooxEngine.GenericSlicer+SliceDrive] */  isRaw={typeof Targets === "object" && "isRaw" in Targets && Targets.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="Space" id={typeof Space === "object" && "id" in Space ? Space?.id : undefined} value={typeof Space === "object" && "value" in Space ? Space?.value : Space} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof Space === "object" && "isRaw" in Space && Space.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_grabbedVisual" id={typeof _grabbedVisual === "object" && "id" in _grabbedVisual ? _grabbedVisual?.id : undefined} value={typeof _grabbedVisual === "object" && "value" in _grabbedVisual ? _grabbedVisual?.value : _grabbedVisual} /* default: ID0 */  isRaw={typeof _grabbedVisual === "object" && "isRaw" in _grabbedVisual && _grabbedVisual.isRaw ? true : undefined} />
        </Component>
      );
    };
    