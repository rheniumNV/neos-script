import { member, Member, Component } from "../../core";
    
    export interface AvatarCreatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_headsetPoint?: member<any>;
_leftPoint?: member<any>;
_rightPoint?: member<any>;
_leftFootPoint?: member<any>;
_rightFootPoint?: member<any>;
_pelvisPoint?: member<any>;
_headsetReference?: member<any>;
_pelvisReference?: member<any>;
_leftReference?: member<any>;
_rightReference?: member<any>;
_leftFootReference?: member<any>;
_rightFootReference?: member<any>;
_initialized?: member<boolean>;
_showAnchors?: member<boolean>;
_useSymmetry?: member<boolean>;
_setupVolumeMeter?: member<boolean>;
_setupProtection?: member<boolean>;
_setupEyes?: member<boolean>;
_setupFaceTracking?: member<boolean>;
_calibrateFeet?: member<boolean>;
_calibratePelvis?: member<boolean>;
_symmetrySetup?: member<boolean>;
_anchors?: member<any>;
_scale?: member<number>;
_protectAvatarEnabled?: member<any>;
_createEnabled?: member<any>;
    }
    
    export function AvatarCreator(props: AvatarCreatorInput){
      const { id, persistentId, updateOrder, Enabled,
_headsetPoint,
_leftPoint,
_rightPoint,
_leftFootPoint,
_rightFootPoint,
_pelvisPoint,
_headsetReference,
_pelvisReference,
_leftReference,
_rightReference,
_leftFootReference,
_rightFootReference,
_initialized,
_showAnchors,
_useSymmetry,
_setupVolumeMeter,
_setupProtection,
_setupEyes,
_setupFaceTracking,
_calibrateFeet,
_calibratePelvis,
_symmetrySetup,
_anchors,
_scale,
_protectAvatarEnabled,
_createEnabled, } = props;
    
      return (
        <Component type="FrooxEngine.AvatarCreator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_headsetPoint" id={typeof _headsetPoint === "object" && "id" in _headsetPoint ? _headsetPoint?.id : undefined} value={typeof _headsetPoint === "object" && "value" in _headsetPoint ? _headsetPoint?.value : _headsetPoint} /* default: ID0 */  isRaw={typeof _headsetPoint === "object" && "isRaw" in _headsetPoint && _headsetPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_leftPoint" id={typeof _leftPoint === "object" && "id" in _leftPoint ? _leftPoint?.id : undefined} value={typeof _leftPoint === "object" && "value" in _leftPoint ? _leftPoint?.value : _leftPoint} /* default: ID0 */  isRaw={typeof _leftPoint === "object" && "isRaw" in _leftPoint && _leftPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_rightPoint" id={typeof _rightPoint === "object" && "id" in _rightPoint ? _rightPoint?.id : undefined} value={typeof _rightPoint === "object" && "value" in _rightPoint ? _rightPoint?.value : _rightPoint} /* default: ID0 */  isRaw={typeof _rightPoint === "object" && "isRaw" in _rightPoint && _rightPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_leftFootPoint" id={typeof _leftFootPoint === "object" && "id" in _leftFootPoint ? _leftFootPoint?.id : undefined} value={typeof _leftFootPoint === "object" && "value" in _leftFootPoint ? _leftFootPoint?.value : _leftFootPoint} /* default: ID0 */  isRaw={typeof _leftFootPoint === "object" && "isRaw" in _leftFootPoint && _leftFootPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_rightFootPoint" id={typeof _rightFootPoint === "object" && "id" in _rightFootPoint ? _rightFootPoint?.id : undefined} value={typeof _rightFootPoint === "object" && "value" in _rightFootPoint ? _rightFootPoint?.value : _rightFootPoint} /* default: ID0 */  isRaw={typeof _rightFootPoint === "object" && "isRaw" in _rightFootPoint && _rightFootPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_pelvisPoint" id={typeof _pelvisPoint === "object" && "id" in _pelvisPoint ? _pelvisPoint?.id : undefined} value={typeof _pelvisPoint === "object" && "value" in _pelvisPoint ? _pelvisPoint?.value : _pelvisPoint} /* default: ID0 */  isRaw={typeof _pelvisPoint === "object" && "isRaw" in _pelvisPoint && _pelvisPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_headsetReference" id={typeof _headsetReference === "object" && "id" in _headsetReference ? _headsetReference?.id : undefined} value={typeof _headsetReference === "object" && "value" in _headsetReference ? _headsetReference?.value : _headsetReference} /* default: ID0 */  isRaw={typeof _headsetReference === "object" && "isRaw" in _headsetReference && _headsetReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_pelvisReference" id={typeof _pelvisReference === "object" && "id" in _pelvisReference ? _pelvisReference?.id : undefined} value={typeof _pelvisReference === "object" && "value" in _pelvisReference ? _pelvisReference?.value : _pelvisReference} /* default: ID0 */  isRaw={typeof _pelvisReference === "object" && "isRaw" in _pelvisReference && _pelvisReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_leftReference" id={typeof _leftReference === "object" && "id" in _leftReference ? _leftReference?.id : undefined} value={typeof _leftReference === "object" && "value" in _leftReference ? _leftReference?.value : _leftReference} /* default: ID0 */  isRaw={typeof _leftReference === "object" && "isRaw" in _leftReference && _leftReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_rightReference" id={typeof _rightReference === "object" && "id" in _rightReference ? _rightReference?.id : undefined} value={typeof _rightReference === "object" && "value" in _rightReference ? _rightReference?.value : _rightReference} /* default: ID0 */  isRaw={typeof _rightReference === "object" && "isRaw" in _rightReference && _rightReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_leftFootReference" id={typeof _leftFootReference === "object" && "id" in _leftFootReference ? _leftFootReference?.id : undefined} value={typeof _leftFootReference === "object" && "value" in _leftFootReference ? _leftFootReference?.value : _leftFootReference} /* default: ID0 */  isRaw={typeof _leftFootReference === "object" && "isRaw" in _leftFootReference && _leftFootReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_rightFootReference" id={typeof _rightFootReference === "object" && "id" in _rightFootReference ? _rightFootReference?.id : undefined} value={typeof _rightFootReference === "object" && "value" in _rightFootReference ? _rightFootReference?.value : _rightFootReference} /* default: ID0 */  isRaw={typeof _rightFootReference === "object" && "isRaw" in _rightFootReference && _rightFootReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_initialized" id={typeof _initialized === "object" && "id" in _initialized ? _initialized?.id : undefined} value={typeof _initialized === "object" && "value" in _initialized ? _initialized?.value : _initialized} /* default: false */  isRaw={typeof _initialized === "object" && "isRaw" in _initialized && _initialized.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_showAnchors" id={typeof _showAnchors === "object" && "id" in _showAnchors ? _showAnchors?.id : undefined} value={typeof _showAnchors === "object" && "value" in _showAnchors ? _showAnchors?.value : _showAnchors} /* default: false */  isRaw={typeof _showAnchors === "object" && "isRaw" in _showAnchors && _showAnchors.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_useSymmetry" id={typeof _useSymmetry === "object" && "id" in _useSymmetry ? _useSymmetry?.id : undefined} value={typeof _useSymmetry === "object" && "value" in _useSymmetry ? _useSymmetry?.value : _useSymmetry} /* default: false */  isRaw={typeof _useSymmetry === "object" && "isRaw" in _useSymmetry && _useSymmetry.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_setupVolumeMeter" id={typeof _setupVolumeMeter === "object" && "id" in _setupVolumeMeter ? _setupVolumeMeter?.id : undefined} value={typeof _setupVolumeMeter === "object" && "value" in _setupVolumeMeter ? _setupVolumeMeter?.value : _setupVolumeMeter} /* default: false */  isRaw={typeof _setupVolumeMeter === "object" && "isRaw" in _setupVolumeMeter && _setupVolumeMeter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_setupProtection" id={typeof _setupProtection === "object" && "id" in _setupProtection ? _setupProtection?.id : undefined} value={typeof _setupProtection === "object" && "value" in _setupProtection ? _setupProtection?.value : _setupProtection} /* default: false */  isRaw={typeof _setupProtection === "object" && "isRaw" in _setupProtection && _setupProtection.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_setupEyes" id={typeof _setupEyes === "object" && "id" in _setupEyes ? _setupEyes?.id : undefined} value={typeof _setupEyes === "object" && "value" in _setupEyes ? _setupEyes?.value : _setupEyes} /* default: false */  isRaw={typeof _setupEyes === "object" && "isRaw" in _setupEyes && _setupEyes.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_setupFaceTracking" id={typeof _setupFaceTracking === "object" && "id" in _setupFaceTracking ? _setupFaceTracking?.id : undefined} value={typeof _setupFaceTracking === "object" && "value" in _setupFaceTracking ? _setupFaceTracking?.value : _setupFaceTracking} /* default: false */  isRaw={typeof _setupFaceTracking === "object" && "isRaw" in _setupFaceTracking && _setupFaceTracking.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_calibrateFeet" id={typeof _calibrateFeet === "object" && "id" in _calibrateFeet ? _calibrateFeet?.id : undefined} value={typeof _calibrateFeet === "object" && "value" in _calibrateFeet ? _calibrateFeet?.value : _calibrateFeet} /* default: false */  isRaw={typeof _calibrateFeet === "object" && "isRaw" in _calibrateFeet && _calibrateFeet.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_calibratePelvis" id={typeof _calibratePelvis === "object" && "id" in _calibratePelvis ? _calibratePelvis?.id : undefined} value={typeof _calibratePelvis === "object" && "value" in _calibratePelvis ? _calibratePelvis?.value : _calibratePelvis} /* default: false */  isRaw={typeof _calibratePelvis === "object" && "isRaw" in _calibratePelvis && _calibratePelvis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_symmetrySetup" id={typeof _symmetrySetup === "object" && "id" in _symmetrySetup ? _symmetrySetup?.id : undefined} value={typeof _symmetrySetup === "object" && "value" in _symmetrySetup ? _symmetrySetup?.value : _symmetrySetup} /* default: false */  isRaw={typeof _symmetrySetup === "object" && "isRaw" in _symmetrySetup && _symmetrySetup.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.AvatarCreator+Anchor]`} name="_anchors" id={typeof _anchors === "object" && "id" in _anchors ? _anchors?.id : undefined} value={typeof _anchors === "object" && "value" in _anchors ? _anchors?.value : _anchors} /* default: FrooxEngine.SyncList`1[FrooxEngine.AvatarCreator+Anchor] */  isRaw={typeof _anchors === "object" && "isRaw" in _anchors && _anchors.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_scale" id={typeof _scale === "object" && "id" in _scale ? _scale?.id : undefined} value={typeof _scale === "object" && "value" in _scale ? _scale?.value : _scale} /* default: 0 */  isRaw={typeof _scale === "object" && "isRaw" in _scale && _scale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_protectAvatarEnabled" id={typeof _protectAvatarEnabled === "object" && "id" in _protectAvatarEnabled ? _protectAvatarEnabled?.id : undefined} value={typeof _protectAvatarEnabled === "object" && "value" in _protectAvatarEnabled ? _protectAvatarEnabled?.value : _protectAvatarEnabled} /* default: ID0 */  isRaw={typeof _protectAvatarEnabled === "object" && "isRaw" in _protectAvatarEnabled && _protectAvatarEnabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_createEnabled" id={typeof _createEnabled === "object" && "id" in _createEnabled ? _createEnabled?.id : undefined} value={typeof _createEnabled === "object" && "value" in _createEnabled ? _createEnabled?.value : _createEnabled} /* default: ID0 */  isRaw={typeof _createEnabled === "object" && "isRaw" in _createEnabled && _createEnabled.isRaw ? true : undefined} />
        </Component>
      );
    };
    