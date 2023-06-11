import { member, Member, Component } from "../../core";
    
    export interface CanvasInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Size?: member<[number, number]>;
EditModeOnly?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
AcceptPhysicalTouch?: member<boolean>;
AcceptExistingTouch?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
IgnoreTouchesFromBehind?: member<boolean>;
BlockAllInteractions?: member<boolean>;
LaserPassThrough?: member<boolean>;
PixelScale?: member<number>;
UnitScale?: member<number>;
_rootRect?: member<any>;
Collider?: member<any>;
_colliderSize?: member<any>;
_colliderOffset?: member<any>;
StartingOffset?: member<number>;
StartingMaskDepth?: member<number>;
    }
    
    export function Canvas(props: CanvasInput){
      const { id, persistentId, updateOrder, Enabled,
Size,
EditModeOnly,
AcceptRemoteTouch,
AcceptPhysicalTouch,
AcceptExistingTouch,
HighPriorityIntegration,
IgnoreTouchesFromBehind,
BlockAllInteractions,
LaserPassThrough,
PixelScale,
UnitScale,
_rootRect,
Collider,
_colliderSize,
_colliderOffset,
StartingOffset,
StartingMaskDepth, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.Canvas" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: [0; 0] */  isRaw={typeof Size === "object" && "isRaw" in Size && Size.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EditModeOnly" id={typeof EditModeOnly === "object" && "id" in EditModeOnly ? EditModeOnly?.id : undefined} value={typeof EditModeOnly === "object" && "value" in EditModeOnly ? EditModeOnly?.value : EditModeOnly} /* default: false */  isRaw={typeof EditModeOnly === "object" && "isRaw" in EditModeOnly && EditModeOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  isRaw={typeof AcceptRemoteTouch === "object" && "isRaw" in AcceptRemoteTouch && AcceptRemoteTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  isRaw={typeof AcceptPhysicalTouch === "object" && "isRaw" in AcceptPhysicalTouch && AcceptPhysicalTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptExistingTouch" id={typeof AcceptExistingTouch === "object" && "id" in AcceptExistingTouch ? AcceptExistingTouch?.id : undefined} value={typeof AcceptExistingTouch === "object" && "value" in AcceptExistingTouch ? AcceptExistingTouch?.value : AcceptExistingTouch} /* default: false */  isRaw={typeof AcceptExistingTouch === "object" && "isRaw" in AcceptExistingTouch && AcceptExistingTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreTouchesFromBehind" id={typeof IgnoreTouchesFromBehind === "object" && "id" in IgnoreTouchesFromBehind ? IgnoreTouchesFromBehind?.id : undefined} value={typeof IgnoreTouchesFromBehind === "object" && "value" in IgnoreTouchesFromBehind ? IgnoreTouchesFromBehind?.value : IgnoreTouchesFromBehind} /* default: false */  isRaw={typeof IgnoreTouchesFromBehind === "object" && "isRaw" in IgnoreTouchesFromBehind && IgnoreTouchesFromBehind.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="BlockAllInteractions" id={typeof BlockAllInteractions === "object" && "id" in BlockAllInteractions ? BlockAllInteractions?.id : undefined} value={typeof BlockAllInteractions === "object" && "value" in BlockAllInteractions ? BlockAllInteractions?.value : BlockAllInteractions} /* default: false */  isRaw={typeof BlockAllInteractions === "object" && "isRaw" in BlockAllInteractions && BlockAllInteractions.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="LaserPassThrough" id={typeof LaserPassThrough === "object" && "id" in LaserPassThrough ? LaserPassThrough?.id : undefined} value={typeof LaserPassThrough === "object" && "value" in LaserPassThrough ? LaserPassThrough?.value : LaserPassThrough} /* default: false */  isRaw={typeof LaserPassThrough === "object" && "isRaw" in LaserPassThrough && LaserPassThrough.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PixelScale" id={typeof PixelScale === "object" && "id" in PixelScale ? PixelScale?.id : undefined} value={typeof PixelScale === "object" && "value" in PixelScale ? PixelScale?.value : PixelScale} /* default: 0 */  isRaw={typeof PixelScale === "object" && "isRaw" in PixelScale && PixelScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="UnitScale" id={typeof UnitScale === "object" && "id" in UnitScale ? UnitScale?.id : undefined} value={typeof UnitScale === "object" && "value" in UnitScale ? UnitScale?.value : UnitScale} /* default: 0 */  isRaw={typeof UnitScale === "object" && "isRaw" in UnitScale && UnitScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_rootRect" id={typeof _rootRect === "object" && "id" in _rootRect ? _rootRect?.id : undefined} value={typeof _rootRect === "object" && "value" in _rootRect ? _rootRect?.value : _rootRect} /* default: ID0 */  isRaw={typeof _rootRect === "object" && "isRaw" in _rootRect && _rootRect.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BoxCollider]`} name="Collider" id={typeof Collider === "object" && "id" in Collider ? Collider?.id : undefined} value={typeof Collider === "object" && "value" in Collider ? Collider?.value : Collider} /* default: ID0 */  isRaw={typeof Collider === "object" && "isRaw" in Collider && Collider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderSize" id={typeof _colliderSize === "object" && "id" in _colliderSize ? _colliderSize?.id : undefined} value={typeof _colliderSize === "object" && "value" in _colliderSize ? _colliderSize?.value : _colliderSize} /* default: ID0 */  isRaw={typeof _colliderSize === "object" && "isRaw" in _colliderSize && _colliderSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderOffset" id={typeof _colliderOffset === "object" && "id" in _colliderOffset ? _colliderOffset?.id : undefined} value={typeof _colliderOffset === "object" && "value" in _colliderOffset ? _colliderOffset?.value : _colliderOffset} /* default: ID0 */  isRaw={typeof _colliderOffset === "object" && "isRaw" in _colliderOffset && _colliderOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="StartingOffset" id={typeof StartingOffset === "object" && "id" in StartingOffset ? StartingOffset?.id : undefined} value={typeof StartingOffset === "object" && "value" in StartingOffset ? StartingOffset?.value : StartingOffset} /* default: 0 */  isRaw={typeof StartingOffset === "object" && "isRaw" in StartingOffset && StartingOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="StartingMaskDepth" id={typeof StartingMaskDepth === "object" && "id" in StartingMaskDepth ? StartingMaskDepth?.id : undefined} value={typeof StartingMaskDepth === "object" && "value" in StartingMaskDepth ? StartingMaskDepth?.value : StartingMaskDepth} /* default: 0 */  isRaw={typeof StartingMaskDepth === "object" && "isRaw" in StartingMaskDepth && StartingMaskDepth.isRaw ? true : undefined} />
        </Component>
      );
    };
    