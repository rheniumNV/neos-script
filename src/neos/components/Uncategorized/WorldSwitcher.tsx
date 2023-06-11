import { member, Member, Component } from "../../core";
    
    export interface WorldSwitcherInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Show?: member<boolean>;
IgnoreTouchesFrom?: member<any>;
_repulsionTree?: member<any>;
_linesMesh?: member<any>;
_slider?: member<any>;
_centerOrb?: member<any>;
_visualRoot?: member<any>;
    }
    
    export function WorldSwitcher(props: WorldSwitcherInput){
      const { id, persistentId, updateOrder, Enabled,
Show,
IgnoreTouchesFrom,
_repulsionTree,
_linesMesh,
_slider,
_centerOrb,
_visualRoot, } = props;
    
      return (
        <Component type="FrooxEngine.WorldSwitcher" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Show" id={typeof Show === "object" && "id" in Show ? Show?.id : undefined} value={typeof Show === "object" && "value" in Show ? Show?.value : Show} /* default: false */  isRaw={typeof Show === "object" && "isRaw" in Show && Show.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="IgnoreTouchesFrom" id={typeof IgnoreTouchesFrom === "object" && "id" in IgnoreTouchesFrom ? IgnoreTouchesFrom?.id : undefined} value={typeof IgnoreTouchesFrom === "object" && "value" in IgnoreTouchesFrom ? IgnoreTouchesFrom?.value : IgnoreTouchesFrom} /* default: ID0 */  isRaw={typeof IgnoreTouchesFrom === "object" && "isRaw" in IgnoreTouchesFrom && IgnoreTouchesFrom.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RepulsionTreeSimulator]`} name="_repulsionTree" id={typeof _repulsionTree === "object" && "id" in _repulsionTree ? _repulsionTree?.id : undefined} value={typeof _repulsionTree === "object" && "value" in _repulsionTree ? _repulsionTree?.value : _repulsionTree} /* default: ID0 */  isRaw={typeof _repulsionTree === "object" && "isRaw" in _repulsionTree && _repulsionTree.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.MultiSegmentMesh]`} name="_linesMesh" id={typeof _linesMesh === "object" && "id" in _linesMesh ? _linesMesh?.id : undefined} value={typeof _linesMesh === "object" && "value" in _linesMesh ? _linesMesh?.value : _linesMesh} /* default: ID0 */  isRaw={typeof _linesMesh === "object" && "isRaw" in _linesMesh && _linesMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slider]`} name="_slider" id={typeof _slider === "object" && "id" in _slider ? _slider?.id : undefined} value={typeof _slider === "object" && "value" in _slider ? _slider?.value : _slider} /* default: ID0 */  isRaw={typeof _slider === "object" && "isRaw" in _slider && _slider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_centerOrb" id={typeof _centerOrb === "object" && "id" in _centerOrb ? _centerOrb?.id : undefined} value={typeof _centerOrb === "object" && "value" in _centerOrb ? _centerOrb?.value : _centerOrb} /* default: ID0 */  isRaw={typeof _centerOrb === "object" && "isRaw" in _centerOrb && _centerOrb.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_visualRoot" id={typeof _visualRoot === "object" && "id" in _visualRoot ? _visualRoot?.id : undefined} value={typeof _visualRoot === "object" && "value" in _visualRoot ? _visualRoot?.value : _visualRoot} /* default: ID0 */  isRaw={typeof _visualRoot === "object" && "isRaw" in _visualRoot && _visualRoot.isRaw ? true : undefined} />
        </Component>
      );
    };
    