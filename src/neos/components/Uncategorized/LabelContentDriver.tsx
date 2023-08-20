import { member, Member, Component } from "../../core";
    
    export interface LabelContentDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AutoUpdate?: member<boolean>;
Padding?: member<[number, number]>;
BaseWidth?: member<number>;
ContentOrientSpace?: member<any>;
OrientAtLocalUser?: member<boolean>;
_contentRoot?: member<any>;
_targetPoint?: member<any>;
_contentRotation?: member<any>;
_contentRotationDrive?: member<any>;
_labelPosition?: member<any>;
_labelWidth?: member<any>;
_lineWidth?: member<any>;
_labelRotation?: member<any>;
_pointPosition?: member<any>;
    }
    
    export function LabelContentDriver(props: LabelContentDriverInput){
      const { id, persistentId, updateOrder, Enabled,
AutoUpdate,
Padding,
BaseWidth,
ContentOrientSpace,
OrientAtLocalUser,
_contentRoot,
_targetPoint,
_contentRotation,
_contentRotationDrive,
_labelPosition,
_labelWidth,
_lineWidth,
_labelRotation,
_pointPosition, } = props;
    
      return (
        <Component type="FrooxEngine.LabelContentDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoUpdate" id={typeof AutoUpdate === "object" && "id" in AutoUpdate ? AutoUpdate?.id : undefined} value={typeof AutoUpdate === "object" && "value" in AutoUpdate ? AutoUpdate?.value : AutoUpdate} /* default: false */  isRaw={typeof AutoUpdate === "object" && "isRaw" in AutoUpdate && AutoUpdate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Padding" id={typeof Padding === "object" && "id" in Padding ? Padding?.id : undefined} value={typeof Padding === "object" && "value" in Padding ? Padding?.value : Padding} /* default: [0; 0] */  isRaw={typeof Padding === "object" && "isRaw" in Padding && Padding.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BaseWidth" id={typeof BaseWidth === "object" && "id" in BaseWidth ? BaseWidth?.id : undefined} value={typeof BaseWidth === "object" && "value" in BaseWidth ? BaseWidth?.value : BaseWidth} /* default: 0 */  isRaw={typeof BaseWidth === "object" && "isRaw" in BaseWidth && BaseWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="ContentOrientSpace" id={typeof ContentOrientSpace === "object" && "id" in ContentOrientSpace ? ContentOrientSpace?.id : undefined} value={typeof ContentOrientSpace === "object" && "value" in ContentOrientSpace ? ContentOrientSpace?.value : ContentOrientSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof ContentOrientSpace === "object" && "isRaw" in ContentOrientSpace && ContentOrientSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OrientAtLocalUser" id={typeof OrientAtLocalUser === "object" && "id" in OrientAtLocalUser ? OrientAtLocalUser?.id : undefined} value={typeof OrientAtLocalUser === "object" && "value" in OrientAtLocalUser ? OrientAtLocalUser?.value : OrientAtLocalUser} /* default: false */  isRaw={typeof OrientAtLocalUser === "object" && "isRaw" in OrientAtLocalUser && OrientAtLocalUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_contentRoot" id={typeof _contentRoot === "object" && "id" in _contentRoot ? _contentRoot?.id : undefined} value={typeof _contentRoot === "object" && "value" in _contentRoot ? _contentRoot?.value : _contentRoot} /* default: ID0 */  isRaw={typeof _contentRoot === "object" && "isRaw" in _contentRoot && _contentRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_targetPoint" id={typeof _targetPoint === "object" && "id" in _targetPoint ? _targetPoint?.id : undefined} value={typeof _targetPoint === "object" && "value" in _targetPoint ? _targetPoint?.value : _targetPoint} /* default: ID0 */  isRaw={typeof _targetPoint === "object" && "isRaw" in _targetPoint && _targetPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="_contentRotation" id={typeof _contentRotation === "object" && "id" in _contentRotation ? _contentRotation?.id : undefined} value={typeof _contentRotation === "object" && "value" in _contentRotation ? _contentRotation?.value : _contentRotation} /* default: [0; 0; 0; 1] */  isRaw={typeof _contentRotation === "object" && "isRaw" in _contentRotation && _contentRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_contentRotationDrive" id={typeof _contentRotationDrive === "object" && "id" in _contentRotationDrive ? _contentRotationDrive?.id : undefined} value={typeof _contentRotationDrive === "object" && "value" in _contentRotationDrive ? _contentRotationDrive?.value : _contentRotationDrive} /* default: ID0 */  isRaw={typeof _contentRotationDrive === "object" && "isRaw" in _contentRotationDrive && _contentRotationDrive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_labelPosition" id={typeof _labelPosition === "object" && "id" in _labelPosition ? _labelPosition?.id : undefined} value={typeof _labelPosition === "object" && "value" in _labelPosition ? _labelPosition?.value : _labelPosition} /* default: ID0 */  isRaw={typeof _labelPosition === "object" && "isRaw" in _labelPosition && _labelPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_labelWidth" id={typeof _labelWidth === "object" && "id" in _labelWidth ? _labelWidth?.id : undefined} value={typeof _labelWidth === "object" && "value" in _labelWidth ? _labelWidth?.value : _labelWidth} /* default: ID0 */  isRaw={typeof _labelWidth === "object" && "isRaw" in _labelWidth && _labelWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_lineWidth" id={typeof _lineWidth === "object" && "id" in _lineWidth ? _lineWidth?.id : undefined} value={typeof _lineWidth === "object" && "value" in _lineWidth ? _lineWidth?.value : _lineWidth} /* default: ID0 */  isRaw={typeof _lineWidth === "object" && "isRaw" in _lineWidth && _lineWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_labelRotation" id={typeof _labelRotation === "object" && "id" in _labelRotation ? _labelRotation?.id : undefined} value={typeof _labelRotation === "object" && "value" in _labelRotation ? _labelRotation?.value : _labelRotation} /* default: ID0 */  isRaw={typeof _labelRotation === "object" && "isRaw" in _labelRotation && _labelRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_pointPosition" id={typeof _pointPosition === "object" && "id" in _pointPosition ? _pointPosition?.id : undefined} value={typeof _pointPosition === "object" && "value" in _pointPosition ? _pointPosition?.value : _pointPosition} /* default: ID0 */  isRaw={typeof _pointPosition === "object" && "isRaw" in _pointPosition && _pointPosition.isRaw ? true : undefined} />
        </Component>
      );
    };
    