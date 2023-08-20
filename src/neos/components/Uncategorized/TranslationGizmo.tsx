import { member, Member, Component } from "../../core";
    
    export interface TranslationGizmoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_xyzGizmo?: member<any>;
_xyGizmo?: member<any>;
_xzGizmo?: member<any>;
_yzGizmo?: member<any>;
_xGizmo?: member<any>;
_yGizmo?: member<any>;
_zGizmo?: member<any>;
    }
    
    export function TranslationGizmo(props: TranslationGizmoInput){
      const { id, persistentId, updateOrder, Enabled,
_xyzGizmo,
_xyGizmo,
_xzGizmo,
_yzGizmo,
_xGizmo,
_yGizmo,
_zGizmo, } = props;
    
      return (
        <Component type="FrooxEngine.TranslationGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.VolumeTranslationGizmo]`} name="_xyzGizmo" id={typeof _xyzGizmo === "object" && "id" in _xyzGizmo ? _xyzGizmo?.id : undefined} value={typeof _xyzGizmo === "object" && "value" in _xyzGizmo ? _xyzGizmo?.value : _xyzGizmo} /* default: ID0 */  isRaw={typeof _xyzGizmo === "object" && "isRaw" in _xyzGizmo && _xyzGizmo.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PlaneTranslationGizmo]`} name="_xyGizmo" id={typeof _xyGizmo === "object" && "id" in _xyGizmo ? _xyGizmo?.id : undefined} value={typeof _xyGizmo === "object" && "value" in _xyGizmo ? _xyGizmo?.value : _xyGizmo} /* default: ID0 */  isRaw={typeof _xyGizmo === "object" && "isRaw" in _xyGizmo && _xyGizmo.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PlaneTranslationGizmo]`} name="_xzGizmo" id={typeof _xzGizmo === "object" && "id" in _xzGizmo ? _xzGizmo?.id : undefined} value={typeof _xzGizmo === "object" && "value" in _xzGizmo ? _xzGizmo?.value : _xzGizmo} /* default: ID0 */  isRaw={typeof _xzGizmo === "object" && "isRaw" in _xzGizmo && _xzGizmo.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PlaneTranslationGizmo]`} name="_yzGizmo" id={typeof _yzGizmo === "object" && "id" in _yzGizmo ? _yzGizmo?.id : undefined} value={typeof _yzGizmo === "object" && "value" in _yzGizmo ? _yzGizmo?.value : _yzGizmo} /* default: ID0 */  isRaw={typeof _yzGizmo === "object" && "isRaw" in _yzGizmo && _yzGizmo.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AxisTranslationGizmo]`} name="_xGizmo" id={typeof _xGizmo === "object" && "id" in _xGizmo ? _xGizmo?.id : undefined} value={typeof _xGizmo === "object" && "value" in _xGizmo ? _xGizmo?.value : _xGizmo} /* default: ID0 */  isRaw={typeof _xGizmo === "object" && "isRaw" in _xGizmo && _xGizmo.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AxisTranslationGizmo]`} name="_yGizmo" id={typeof _yGizmo === "object" && "id" in _yGizmo ? _yGizmo?.id : undefined} value={typeof _yGizmo === "object" && "value" in _yGizmo ? _yGizmo?.value : _yGizmo} /* default: ID0 */  isRaw={typeof _yGizmo === "object" && "isRaw" in _yGizmo && _yGizmo.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AxisTranslationGizmo]`} name="_zGizmo" id={typeof _zGizmo === "object" && "id" in _zGizmo ? _zGizmo?.id : undefined} value={typeof _zGizmo === "object" && "value" in _zGizmo ? _zGizmo?.value : _zGizmo} /* default: ID0 */  isRaw={typeof _zGizmo === "object" && "isRaw" in _zGizmo && _zGizmo.isRaw ? true : undefined} />
        </Component>
      );
    };
    