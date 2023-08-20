import { member, Member, Component } from "../../core";
    
    export interface WorldGrabMoverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ShowLerp?: member<number>;
_activatingUser?: member<any>;
_crossMesh?: member<any>;
_visualVisible?: member<any>;
_visualRotation?: member<any>;
_material?: member<any>;
_referencePosition?: member<[number, number, number]>;
    }
    
    export function WorldGrabMover(props: WorldGrabMoverInput){
      const { id, persistentId, updateOrder, Enabled,
ShowLerp,
_activatingUser,
_crossMesh,
_visualVisible,
_visualRotation,
_material,
_referencePosition, } = props;
    
      return (
        <Component type="FrooxEngine.WorldGrabMover" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShowLerp" id={typeof ShowLerp === "object" && "id" in ShowLerp ? ShowLerp?.id : undefined} value={typeof ShowLerp === "object" && "value" in ShowLerp ? ShowLerp?.value : ShowLerp} /* default: 0 */  isRaw={typeof ShowLerp === "object" && "isRaw" in ShowLerp && ShowLerp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="_activatingUser" id={typeof _activatingUser === "object" && "id" in _activatingUser ? _activatingUser?.id : undefined} value={typeof _activatingUser === "object" && "value" in _activatingUser ? _activatingUser?.value : _activatingUser} /* default: ID0 */  isRaw={typeof _activatingUser === "object" && "isRaw" in _activatingUser && _activatingUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.CrossMesh]`} name="_crossMesh" id={typeof _crossMesh === "object" && "id" in _crossMesh ? _crossMesh?.id : undefined} value={typeof _crossMesh === "object" && "value" in _crossMesh ? _crossMesh?.value : _crossMesh} /* default: ID0 */  isRaw={typeof _crossMesh === "object" && "isRaw" in _crossMesh && _crossMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_visualVisible" id={typeof _visualVisible === "object" && "id" in _visualVisible ? _visualVisible?.id : undefined} value={typeof _visualVisible === "object" && "value" in _visualVisible ? _visualVisible?.value : _visualVisible} /* default: ID0 */  isRaw={typeof _visualVisible === "object" && "isRaw" in _visualVisible && _visualVisible.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_visualRotation" id={typeof _visualRotation === "object" && "id" in _visualRotation ? _visualRotation?.id : undefined} value={typeof _visualRotation === "object" && "value" in _visualRotation ? _visualRotation?.value : _visualRotation} /* default: ID0 */  isRaw={typeof _visualRotation === "object" && "isRaw" in _visualRotation && _visualRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  isRaw={typeof _material === "object" && "isRaw" in _material && _material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_referencePosition" id={typeof _referencePosition === "object" && "id" in _referencePosition ? _referencePosition?.id : undefined} value={typeof _referencePosition === "object" && "value" in _referencePosition ? _referencePosition?.value : _referencePosition} /* default: [0; 0; 0] */  isRaw={typeof _referencePosition === "object" && "isRaw" in _referencePosition && _referencePosition.isRaw ? true : undefined} />
        </Component>
      );
    };
    