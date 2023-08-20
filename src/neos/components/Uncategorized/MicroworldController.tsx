import { member, Member, Component } from "../../core";
    
    export interface MicroworldControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
BaseColor?: member<[number, number, number, number]>;
Seed?: member<number>;
AnimationSpeed?: member<number>;
Exp?: member<number>;
HueDeviation?: member<number>;
SaturationDeviation?: member<number>;
ValueDeviation?: member<number>;
BigParticlesMinColor?: member<any>;
BigParticlesMaxColor?: member<any>;
SmallParticlesMinColor?: member<any>;
SmallParticlesMaxColor?: member<any>;
DarkParticlesMinColor?: member<any>;
DarkParticlesMaxColor?: member<any>;
GroundNearColor?: member<any>;
GroundFarColor?: member<any>;
Skybox?: member<any>;
    }
    
    export function MicroworldController(props: MicroworldControllerInput){
      const { id, persistentId, updateOrder, Enabled,
BaseColor,
Seed,
AnimationSpeed,
Exp,
HueDeviation,
SaturationDeviation,
ValueDeviation,
BigParticlesMinColor,
BigParticlesMaxColor,
SmallParticlesMinColor,
SmallParticlesMaxColor,
DarkParticlesMinColor,
DarkParticlesMaxColor,
GroundNearColor,
GroundFarColor,
Skybox, } = props;
    
      return (
        <Component type="FrooxEngine.MicroworldController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BaseColor" id={typeof BaseColor === "object" && "id" in BaseColor ? BaseColor?.id : undefined} value={typeof BaseColor === "object" && "value" in BaseColor ? BaseColor?.value : BaseColor} /* default: [0; 0; 0; 0] */  isRaw={typeof BaseColor === "object" && "isRaw" in BaseColor && BaseColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Seed" id={typeof Seed === "object" && "id" in Seed ? Seed?.id : undefined} value={typeof Seed === "object" && "value" in Seed ? Seed?.value : Seed} /* default: 0 */  isRaw={typeof Seed === "object" && "isRaw" in Seed && Seed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AnimationSpeed" id={typeof AnimationSpeed === "object" && "id" in AnimationSpeed ? AnimationSpeed?.id : undefined} value={typeof AnimationSpeed === "object" && "value" in AnimationSpeed ? AnimationSpeed?.value : AnimationSpeed} /* default: 0 */  isRaw={typeof AnimationSpeed === "object" && "isRaw" in AnimationSpeed && AnimationSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Exp" id={typeof Exp === "object" && "id" in Exp ? Exp?.id : undefined} value={typeof Exp === "object" && "value" in Exp ? Exp?.value : Exp} /* default: 0 */  isRaw={typeof Exp === "object" && "isRaw" in Exp && Exp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HueDeviation" id={typeof HueDeviation === "object" && "id" in HueDeviation ? HueDeviation?.id : undefined} value={typeof HueDeviation === "object" && "value" in HueDeviation ? HueDeviation?.value : HueDeviation} /* default: 0 */  isRaw={typeof HueDeviation === "object" && "isRaw" in HueDeviation && HueDeviation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SaturationDeviation" id={typeof SaturationDeviation === "object" && "id" in SaturationDeviation ? SaturationDeviation?.id : undefined} value={typeof SaturationDeviation === "object" && "value" in SaturationDeviation ? SaturationDeviation?.value : SaturationDeviation} /* default: 0 */  isRaw={typeof SaturationDeviation === "object" && "isRaw" in SaturationDeviation && SaturationDeviation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ValueDeviation" id={typeof ValueDeviation === "object" && "id" in ValueDeviation ? ValueDeviation?.id : undefined} value={typeof ValueDeviation === "object" && "value" in ValueDeviation ? ValueDeviation?.value : ValueDeviation} /* default: 0 */  isRaw={typeof ValueDeviation === "object" && "isRaw" in ValueDeviation && ValueDeviation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="BigParticlesMinColor" id={typeof BigParticlesMinColor === "object" && "id" in BigParticlesMinColor ? BigParticlesMinColor?.id : undefined} value={typeof BigParticlesMinColor === "object" && "value" in BigParticlesMinColor ? BigParticlesMinColor?.value : BigParticlesMinColor} /* default: ID0 */  isRaw={typeof BigParticlesMinColor === "object" && "isRaw" in BigParticlesMinColor && BigParticlesMinColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="BigParticlesMaxColor" id={typeof BigParticlesMaxColor === "object" && "id" in BigParticlesMaxColor ? BigParticlesMaxColor?.id : undefined} value={typeof BigParticlesMaxColor === "object" && "value" in BigParticlesMaxColor ? BigParticlesMaxColor?.value : BigParticlesMaxColor} /* default: ID0 */  isRaw={typeof BigParticlesMaxColor === "object" && "isRaw" in BigParticlesMaxColor && BigParticlesMaxColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="SmallParticlesMinColor" id={typeof SmallParticlesMinColor === "object" && "id" in SmallParticlesMinColor ? SmallParticlesMinColor?.id : undefined} value={typeof SmallParticlesMinColor === "object" && "value" in SmallParticlesMinColor ? SmallParticlesMinColor?.value : SmallParticlesMinColor} /* default: ID0 */  isRaw={typeof SmallParticlesMinColor === "object" && "isRaw" in SmallParticlesMinColor && SmallParticlesMinColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="SmallParticlesMaxColor" id={typeof SmallParticlesMaxColor === "object" && "id" in SmallParticlesMaxColor ? SmallParticlesMaxColor?.id : undefined} value={typeof SmallParticlesMaxColor === "object" && "value" in SmallParticlesMaxColor ? SmallParticlesMaxColor?.value : SmallParticlesMaxColor} /* default: ID0 */  isRaw={typeof SmallParticlesMaxColor === "object" && "isRaw" in SmallParticlesMaxColor && SmallParticlesMaxColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="DarkParticlesMinColor" id={typeof DarkParticlesMinColor === "object" && "id" in DarkParticlesMinColor ? DarkParticlesMinColor?.id : undefined} value={typeof DarkParticlesMinColor === "object" && "value" in DarkParticlesMinColor ? DarkParticlesMinColor?.value : DarkParticlesMinColor} /* default: ID0 */  isRaw={typeof DarkParticlesMinColor === "object" && "isRaw" in DarkParticlesMinColor && DarkParticlesMinColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="DarkParticlesMaxColor" id={typeof DarkParticlesMaxColor === "object" && "id" in DarkParticlesMaxColor ? DarkParticlesMaxColor?.id : undefined} value={typeof DarkParticlesMaxColor === "object" && "value" in DarkParticlesMaxColor ? DarkParticlesMaxColor?.value : DarkParticlesMaxColor} /* default: ID0 */  isRaw={typeof DarkParticlesMaxColor === "object" && "isRaw" in DarkParticlesMaxColor && DarkParticlesMaxColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="GroundNearColor" id={typeof GroundNearColor === "object" && "id" in GroundNearColor ? GroundNearColor?.id : undefined} value={typeof GroundNearColor === "object" && "value" in GroundNearColor ? GroundNearColor?.value : GroundNearColor} /* default: ID0 */  isRaw={typeof GroundNearColor === "object" && "isRaw" in GroundNearColor && GroundNearColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="GroundFarColor" id={typeof GroundFarColor === "object" && "id" in GroundFarColor ? GroundFarColor?.id : undefined} value={typeof GroundFarColor === "object" && "value" in GroundFarColor ? GroundFarColor?.value : GroundFarColor} /* default: ID0 */  isRaw={typeof GroundFarColor === "object" && "isRaw" in GroundFarColor && GroundFarColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.GradientSkyMaterial]`} name="Skybox" id={typeof Skybox === "object" && "id" in Skybox ? Skybox?.id : undefined} value={typeof Skybox === "object" && "value" in Skybox ? Skybox?.value : Skybox} /* default: ID0 */  isRaw={typeof Skybox === "object" && "isRaw" in Skybox && Skybox.isRaw ? true : undefined} />
        </Component>
      );
    };
    