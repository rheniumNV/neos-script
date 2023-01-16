import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface CharacterForceFieldInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TriggersOnly?: member<boolean>;
Force?: member<[number, number, number]>;
ForceMode?: member<any>;
ForceSpace?: member<any>;
RadialForceRadius?: member<number>;
ForceSlotSpace?: member<any>;
MinActivationVelocity?: member<number>;
MaxForceVelocity?: member<number>;
HoldJumpMaxForceVelocity?: member<number>;
PreseveDirectionAcrossPlane?: member<boolean>;
IgnoreParentUser?: member<boolean>;
NoJumpMultiplier?: member<number>;
HoldJumpMultiplier?: member<number>;
MaxCharacterVelocity?: member<number>;
MinCharacterVelocity?: member<number>;
CharacterVelocityDampeningSpeed?: member<number>;
    }
    
    export function CharacterForceField(props: CharacterForceFieldInput){
      const { id, persistentId, updateOrder, Enabled,
TriggersOnly,
Force,
ForceMode,
ForceSpace,
RadialForceRadius,
ForceSlotSpace,
MinActivationVelocity,
MaxForceVelocity,
HoldJumpMaxForceVelocity,
PreseveDirectionAcrossPlane,
IgnoreParentUser,
NoJumpMultiplier,
HoldJumpMultiplier,
MaxCharacterVelocity,
MinCharacterVelocity,
CharacterVelocityDampeningSpeed, } = props;
    
      return (
        <Component type="FrooxEngine.CharacterForceField" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TriggersOnly" id={typeof TriggersOnly === "object" && "id" in TriggersOnly ? TriggersOnly?.id : undefined} value={typeof TriggersOnly === "object" && "value" in TriggersOnly ? TriggersOnly?.value : TriggersOnly} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Force" id={typeof Force === "object" && "id" in Force ? Force?.id : undefined} value={typeof Force === "object" && "value" in Force ? Force?.value : Force} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CharacterForceField+Mode]`} name="ForceMode" id={typeof ForceMode === "object" && "id" in ForceMode ? ForceMode?.id : undefined} value={typeof ForceMode === "object" && "value" in ForceMode ? ForceMode?.value : ForceMode} /* default: ConstantForce */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CharacterForceField+Space]`} name="ForceSpace" id={typeof ForceSpace === "object" && "id" in ForceSpace ? ForceSpace?.id : undefined} value={typeof ForceSpace === "object" && "value" in ForceSpace ? ForceSpace?.value : ForceSpace} /* default: Slot */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RadialForceRadius" id={typeof RadialForceRadius === "object" && "id" in RadialForceRadius ? RadialForceRadius?.id : undefined} value={typeof RadialForceRadius === "object" && "value" in RadialForceRadius ? RadialForceRadius?.value : RadialForceRadius} /* default: 0 */  />
<Member type={`FrooxEngine.RootSpace`} name="ForceSlotSpace" id={typeof ForceSlotSpace === "object" && "id" in ForceSlotSpace ? ForceSlotSpace?.id : undefined} value={typeof ForceSlotSpace === "object" && "value" in ForceSlotSpace ? ForceSlotSpace?.value : ForceSlotSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinActivationVelocity" id={typeof MinActivationVelocity === "object" && "id" in MinActivationVelocity ? MinActivationVelocity?.id : undefined} value={typeof MinActivationVelocity === "object" && "value" in MinActivationVelocity ? MinActivationVelocity?.value : MinActivationVelocity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxForceVelocity" id={typeof MaxForceVelocity === "object" && "id" in MaxForceVelocity ? MaxForceVelocity?.id : undefined} value={typeof MaxForceVelocity === "object" && "value" in MaxForceVelocity ? MaxForceVelocity?.value : MaxForceVelocity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HoldJumpMaxForceVelocity" id={typeof HoldJumpMaxForceVelocity === "object" && "id" in HoldJumpMaxForceVelocity ? HoldJumpMaxForceVelocity?.id : undefined} value={typeof HoldJumpMaxForceVelocity === "object" && "value" in HoldJumpMaxForceVelocity ? HoldJumpMaxForceVelocity?.value : HoldJumpMaxForceVelocity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PreseveDirectionAcrossPlane" id={typeof PreseveDirectionAcrossPlane === "object" && "id" in PreseveDirectionAcrossPlane ? PreseveDirectionAcrossPlane?.id : undefined} value={typeof PreseveDirectionAcrossPlane === "object" && "value" in PreseveDirectionAcrossPlane ? PreseveDirectionAcrossPlane?.value : PreseveDirectionAcrossPlane} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreParentUser" id={typeof IgnoreParentUser === "object" && "id" in IgnoreParentUser ? IgnoreParentUser?.id : undefined} value={typeof IgnoreParentUser === "object" && "value" in IgnoreParentUser ? IgnoreParentUser?.value : IgnoreParentUser} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NoJumpMultiplier" id={typeof NoJumpMultiplier === "object" && "id" in NoJumpMultiplier ? NoJumpMultiplier?.id : undefined} value={typeof NoJumpMultiplier === "object" && "value" in NoJumpMultiplier ? NoJumpMultiplier?.value : NoJumpMultiplier} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HoldJumpMultiplier" id={typeof HoldJumpMultiplier === "object" && "id" in HoldJumpMultiplier ? HoldJumpMultiplier?.id : undefined} value={typeof HoldJumpMultiplier === "object" && "value" in HoldJumpMultiplier ? HoldJumpMultiplier?.value : HoldJumpMultiplier} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxCharacterVelocity" id={typeof MaxCharacterVelocity === "object" && "id" in MaxCharacterVelocity ? MaxCharacterVelocity?.id : undefined} value={typeof MaxCharacterVelocity === "object" && "value" in MaxCharacterVelocity ? MaxCharacterVelocity?.value : MaxCharacterVelocity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinCharacterVelocity" id={typeof MinCharacterVelocity === "object" && "id" in MinCharacterVelocity ? MinCharacterVelocity?.id : undefined} value={typeof MinCharacterVelocity === "object" && "value" in MinCharacterVelocity ? MinCharacterVelocity?.value : MinCharacterVelocity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CharacterVelocityDampeningSpeed" id={typeof CharacterVelocityDampeningSpeed === "object" && "id" in CharacterVelocityDampeningSpeed ? CharacterVelocityDampeningSpeed?.id : undefined} value={typeof CharacterVelocityDampeningSpeed === "object" && "value" in CharacterVelocityDampeningSpeed ? CharacterVelocityDampeningSpeed?.value : CharacterVelocityDampeningSpeed} /* default: 0 */  />
        </Component>
      );
    };
    