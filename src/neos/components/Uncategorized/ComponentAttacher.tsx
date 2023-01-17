import { member, Member, Component } from "../../core";
    
    export interface ComponentAttacherInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetSlot?: member<any>;
_uiRoot?: member<any>;
_customGenericType?: member<any>;
_genericType?: member<any>;
_customGenericTypeLabel?: member<string>;
_customGenericTypeColor?: member<any>;
    }
    
    export function ComponentAttacher(props: ComponentAttacherInput){
      const { id, persistentId, updateOrder, Enabled,
TargetSlot,
_uiRoot,
_customGenericType,
_genericType,
_customGenericTypeLabel,
_customGenericTypeColor, } = props;
    
      return (
        <Component type="FrooxEngine.ComponentAttacher" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TargetSlot" id={typeof TargetSlot === "object" && "id" in TargetSlot ? TargetSlot?.id : undefined} value={typeof TargetSlot === "object" && "value" in TargetSlot ? TargetSlot?.value : TargetSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_uiRoot" id={typeof _uiRoot === "object" && "id" in _uiRoot ? _uiRoot?.id : undefined} value={typeof _uiRoot === "object" && "value" in _uiRoot ? _uiRoot?.value : _uiRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_customGenericType" id={typeof _customGenericType === "object" && "id" in _customGenericType ? _customGenericType?.id : undefined} value={typeof _customGenericType === "object" && "value" in _customGenericType ? _customGenericType?.value : _customGenericType} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncType`} name="_genericType" id={typeof _genericType === "object" && "id" in _genericType ? _genericType?.id : undefined} value={typeof _genericType === "object" && "value" in _genericType ? _genericType?.value : _genericType} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_customGenericTypeLabel" id={typeof _customGenericTypeLabel === "object" && "id" in _customGenericTypeLabel ? _customGenericTypeLabel?.id : undefined} value={typeof _customGenericTypeLabel === "object" && "value" in _customGenericTypeLabel ? _customGenericTypeLabel?.value : _customGenericTypeLabel} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_customGenericTypeColor" id={typeof _customGenericTypeColor === "object" && "id" in _customGenericTypeColor ? _customGenericTypeColor?.id : undefined} value={typeof _customGenericTypeColor === "object" && "value" in _customGenericTypeColor ? _customGenericTypeColor?.value : _customGenericTypeColor} /* default: ID0 */  />
        </Component>
      );
    };
    