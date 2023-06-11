import { member, Member, Component } from "../../../core";
    
    export interface SingleShapeCharacterControllerManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
UseUserHeadHeightWhenAvailable?: member<boolean>;
HeadHeightOffset?: member<number>;
CrouchTargetWidth?: member<number>;
CrouchStart?: member<number>;
CrouchEnd?: member<number>;
DefaultHeight?: member<number>;
DefaultWidth?: member<number>;
RootAtBottom?: member<boolean>;
TargetHeight?: member<any>;
TargetWidth?: member<any>;
TargetOffset?: member<any>;
    }
    
    export function SingleShapeCharacterControllerManager(props: SingleShapeCharacterControllerManagerInput){
      const { id, persistentId, updateOrder, Enabled,
UseUserHeadHeightWhenAvailable,
HeadHeightOffset,
CrouchTargetWidth,
CrouchStart,
CrouchEnd,
DefaultHeight,
DefaultWidth,
RootAtBottom,
TargetHeight,
TargetWidth,
TargetOffset, } = props;
    
      return (
        <Component type="FrooxEngine.SingleShapeCharacterControllerManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseUserHeadHeightWhenAvailable" id={typeof UseUserHeadHeightWhenAvailable === "object" && "id" in UseUserHeadHeightWhenAvailable ? UseUserHeadHeightWhenAvailable?.id : undefined} value={typeof UseUserHeadHeightWhenAvailable === "object" && "value" in UseUserHeadHeightWhenAvailable ? UseUserHeadHeightWhenAvailable?.value : UseUserHeadHeightWhenAvailable} /* default: false */  isRaw={typeof UseUserHeadHeightWhenAvailable === "object" && "isRaw" in UseUserHeadHeightWhenAvailable && UseUserHeadHeightWhenAvailable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeadHeightOffset" id={typeof HeadHeightOffset === "object" && "id" in HeadHeightOffset ? HeadHeightOffset?.id : undefined} value={typeof HeadHeightOffset === "object" && "value" in HeadHeightOffset ? HeadHeightOffset?.value : HeadHeightOffset} /* default: 0 */  isRaw={typeof HeadHeightOffset === "object" && "isRaw" in HeadHeightOffset && HeadHeightOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CrouchTargetWidth" id={typeof CrouchTargetWidth === "object" && "id" in CrouchTargetWidth ? CrouchTargetWidth?.id : undefined} value={typeof CrouchTargetWidth === "object" && "value" in CrouchTargetWidth ? CrouchTargetWidth?.value : CrouchTargetWidth} /* default: 0 */  isRaw={typeof CrouchTargetWidth === "object" && "isRaw" in CrouchTargetWidth && CrouchTargetWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CrouchStart" id={typeof CrouchStart === "object" && "id" in CrouchStart ? CrouchStart?.id : undefined} value={typeof CrouchStart === "object" && "value" in CrouchStart ? CrouchStart?.value : CrouchStart} /* default: 0 */  isRaw={typeof CrouchStart === "object" && "isRaw" in CrouchStart && CrouchStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CrouchEnd" id={typeof CrouchEnd === "object" && "id" in CrouchEnd ? CrouchEnd?.id : undefined} value={typeof CrouchEnd === "object" && "value" in CrouchEnd ? CrouchEnd?.value : CrouchEnd} /* default: 0 */  isRaw={typeof CrouchEnd === "object" && "isRaw" in CrouchEnd && CrouchEnd.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DefaultHeight" id={typeof DefaultHeight === "object" && "id" in DefaultHeight ? DefaultHeight?.id : undefined} value={typeof DefaultHeight === "object" && "value" in DefaultHeight ? DefaultHeight?.value : DefaultHeight} /* default: 0 */  isRaw={typeof DefaultHeight === "object" && "isRaw" in DefaultHeight && DefaultHeight.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DefaultWidth" id={typeof DefaultWidth === "object" && "id" in DefaultWidth ? DefaultWidth?.id : undefined} value={typeof DefaultWidth === "object" && "value" in DefaultWidth ? DefaultWidth?.value : DefaultWidth} /* default: 0 */  isRaw={typeof DefaultWidth === "object" && "isRaw" in DefaultWidth && DefaultWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RootAtBottom" id={typeof RootAtBottom === "object" && "id" in RootAtBottom ? RootAtBottom?.id : undefined} value={typeof RootAtBottom === "object" && "value" in RootAtBottom ? RootAtBottom?.value : RootAtBottom} /* default: false */  isRaw={typeof RootAtBottom === "object" && "isRaw" in RootAtBottom && RootAtBottom.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="TargetHeight" id={typeof TargetHeight === "object" && "id" in TargetHeight ? TargetHeight?.id : undefined} value={typeof TargetHeight === "object" && "value" in TargetHeight ? TargetHeight?.value : TargetHeight} /* default: ID0 */  isRaw={typeof TargetHeight === "object" && "isRaw" in TargetHeight && TargetHeight.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="TargetWidth" id={typeof TargetWidth === "object" && "id" in TargetWidth ? TargetWidth?.id : undefined} value={typeof TargetWidth === "object" && "value" in TargetWidth ? TargetWidth?.value : TargetWidth} /* default: ID0 */  isRaw={typeof TargetWidth === "object" && "isRaw" in TargetWidth && TargetWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="TargetOffset" id={typeof TargetOffset === "object" && "id" in TargetOffset ? TargetOffset?.id : undefined} value={typeof TargetOffset === "object" && "value" in TargetOffset ? TargetOffset?.value : TargetOffset} /* default: ID0 */  isRaw={typeof TargetOffset === "object" && "isRaw" in TargetOffset && TargetOffset.isRaw ? true : undefined} />
        </Component>
      );
    };
    