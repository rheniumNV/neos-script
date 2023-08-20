import { member, Member, Component } from "../../../core";
    
    export interface ScaleObjectManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ScalePower?: member<number>;
LowerBound?: member<number>;
UpperBound?: member<number>;
FarSizeTransitionRange?: member<number>;
FarSizeTransitionExp?: member<number>;
NearSizeTransitionRange?: member<number>;
NearSizeTransitionExp?: member<number>;
FarOffsetTransitionRange?: member<number>;
FarOffsetTransitionExp?: member<number>;
FarTransitionOffset?: member<[number, number, number]>;
NearOffsetTransitionRange?: member<number>;
NearOffsetTransitionExp?: member<number>;
NearTransitionOffset?: member<[number, number, number]>;
CenterOffsetRadius?: member<number>;
OptimalDistance?: member<number>;
CoordinatePowerBase?: member<[number, number, number]>;
    }
    
    export function ScaleObjectManager(props: ScaleObjectManagerInput){
      const { id, persistentId, updateOrder, Enabled,
ScalePower,
LowerBound,
UpperBound,
FarSizeTransitionRange,
FarSizeTransitionExp,
NearSizeTransitionRange,
NearSizeTransitionExp,
FarOffsetTransitionRange,
FarOffsetTransitionExp,
FarTransitionOffset,
NearOffsetTransitionRange,
NearOffsetTransitionExp,
NearTransitionOffset,
CenterOffsetRadius,
OptimalDistance,
CoordinatePowerBase, } = props;
    
      return (
        <Component type="FrooxEngine.ScaleObjectManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ScalePower" id={typeof ScalePower === "object" && "id" in ScalePower ? ScalePower?.id : undefined} value={typeof ScalePower === "object" && "value" in ScalePower ? ScalePower?.value : ScalePower} /* default: 0 */  isRaw={typeof ScalePower === "object" && "isRaw" in ScalePower && ScalePower.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LowerBound" id={typeof LowerBound === "object" && "id" in LowerBound ? LowerBound?.id : undefined} value={typeof LowerBound === "object" && "value" in LowerBound ? LowerBound?.value : LowerBound} /* default: 0 */  isRaw={typeof LowerBound === "object" && "isRaw" in LowerBound && LowerBound.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="UpperBound" id={typeof UpperBound === "object" && "id" in UpperBound ? UpperBound?.id : undefined} value={typeof UpperBound === "object" && "value" in UpperBound ? UpperBound?.value : UpperBound} /* default: 0 */  isRaw={typeof UpperBound === "object" && "isRaw" in UpperBound && UpperBound.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FarSizeTransitionRange" id={typeof FarSizeTransitionRange === "object" && "id" in FarSizeTransitionRange ? FarSizeTransitionRange?.id : undefined} value={typeof FarSizeTransitionRange === "object" && "value" in FarSizeTransitionRange ? FarSizeTransitionRange?.value : FarSizeTransitionRange} /* default: 0 */  isRaw={typeof FarSizeTransitionRange === "object" && "isRaw" in FarSizeTransitionRange && FarSizeTransitionRange.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FarSizeTransitionExp" id={typeof FarSizeTransitionExp === "object" && "id" in FarSizeTransitionExp ? FarSizeTransitionExp?.id : undefined} value={typeof FarSizeTransitionExp === "object" && "value" in FarSizeTransitionExp ? FarSizeTransitionExp?.value : FarSizeTransitionExp} /* default: 0 */  isRaw={typeof FarSizeTransitionExp === "object" && "isRaw" in FarSizeTransitionExp && FarSizeTransitionExp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NearSizeTransitionRange" id={typeof NearSizeTransitionRange === "object" && "id" in NearSizeTransitionRange ? NearSizeTransitionRange?.id : undefined} value={typeof NearSizeTransitionRange === "object" && "value" in NearSizeTransitionRange ? NearSizeTransitionRange?.value : NearSizeTransitionRange} /* default: 0 */  isRaw={typeof NearSizeTransitionRange === "object" && "isRaw" in NearSizeTransitionRange && NearSizeTransitionRange.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NearSizeTransitionExp" id={typeof NearSizeTransitionExp === "object" && "id" in NearSizeTransitionExp ? NearSizeTransitionExp?.id : undefined} value={typeof NearSizeTransitionExp === "object" && "value" in NearSizeTransitionExp ? NearSizeTransitionExp?.value : NearSizeTransitionExp} /* default: 0 */  isRaw={typeof NearSizeTransitionExp === "object" && "isRaw" in NearSizeTransitionExp && NearSizeTransitionExp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FarOffsetTransitionRange" id={typeof FarOffsetTransitionRange === "object" && "id" in FarOffsetTransitionRange ? FarOffsetTransitionRange?.id : undefined} value={typeof FarOffsetTransitionRange === "object" && "value" in FarOffsetTransitionRange ? FarOffsetTransitionRange?.value : FarOffsetTransitionRange} /* default: 0 */  isRaw={typeof FarOffsetTransitionRange === "object" && "isRaw" in FarOffsetTransitionRange && FarOffsetTransitionRange.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FarOffsetTransitionExp" id={typeof FarOffsetTransitionExp === "object" && "id" in FarOffsetTransitionExp ? FarOffsetTransitionExp?.id : undefined} value={typeof FarOffsetTransitionExp === "object" && "value" in FarOffsetTransitionExp ? FarOffsetTransitionExp?.value : FarOffsetTransitionExp} /* default: 0 */  isRaw={typeof FarOffsetTransitionExp === "object" && "isRaw" in FarOffsetTransitionExp && FarOffsetTransitionExp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="FarTransitionOffset" id={typeof FarTransitionOffset === "object" && "id" in FarTransitionOffset ? FarTransitionOffset?.id : undefined} value={typeof FarTransitionOffset === "object" && "value" in FarTransitionOffset ? FarTransitionOffset?.value : FarTransitionOffset} /* default: [0; 0; 0] */  isRaw={typeof FarTransitionOffset === "object" && "isRaw" in FarTransitionOffset && FarTransitionOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NearOffsetTransitionRange" id={typeof NearOffsetTransitionRange === "object" && "id" in NearOffsetTransitionRange ? NearOffsetTransitionRange?.id : undefined} value={typeof NearOffsetTransitionRange === "object" && "value" in NearOffsetTransitionRange ? NearOffsetTransitionRange?.value : NearOffsetTransitionRange} /* default: 0 */  isRaw={typeof NearOffsetTransitionRange === "object" && "isRaw" in NearOffsetTransitionRange && NearOffsetTransitionRange.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NearOffsetTransitionExp" id={typeof NearOffsetTransitionExp === "object" && "id" in NearOffsetTransitionExp ? NearOffsetTransitionExp?.id : undefined} value={typeof NearOffsetTransitionExp === "object" && "value" in NearOffsetTransitionExp ? NearOffsetTransitionExp?.value : NearOffsetTransitionExp} /* default: 0 */  isRaw={typeof NearOffsetTransitionExp === "object" && "isRaw" in NearOffsetTransitionExp && NearOffsetTransitionExp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="NearTransitionOffset" id={typeof NearTransitionOffset === "object" && "id" in NearTransitionOffset ? NearTransitionOffset?.id : undefined} value={typeof NearTransitionOffset === "object" && "value" in NearTransitionOffset ? NearTransitionOffset?.value : NearTransitionOffset} /* default: [0; 0; 0] */  isRaw={typeof NearTransitionOffset === "object" && "isRaw" in NearTransitionOffset && NearTransitionOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CenterOffsetRadius" id={typeof CenterOffsetRadius === "object" && "id" in CenterOffsetRadius ? CenterOffsetRadius?.id : undefined} value={typeof CenterOffsetRadius === "object" && "value" in CenterOffsetRadius ? CenterOffsetRadius?.value : CenterOffsetRadius} /* default: 0 */  isRaw={typeof CenterOffsetRadius === "object" && "isRaw" in CenterOffsetRadius && CenterOffsetRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OptimalDistance" id={typeof OptimalDistance === "object" && "id" in OptimalDistance ? OptimalDistance?.id : undefined} value={typeof OptimalDistance === "object" && "value" in OptimalDistance ? OptimalDistance?.value : OptimalDistance} /* default: 0 */  isRaw={typeof OptimalDistance === "object" && "isRaw" in OptimalDistance && OptimalDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="CoordinatePowerBase" id={typeof CoordinatePowerBase === "object" && "id" in CoordinatePowerBase ? CoordinatePowerBase?.id : undefined} value={typeof CoordinatePowerBase === "object" && "value" in CoordinatePowerBase ? CoordinatePowerBase?.value : CoordinatePowerBase} /* default: [0; 0; 0] */  isRaw={typeof CoordinatePowerBase === "object" && "isRaw" in CoordinatePowerBase && CoordinatePowerBase.isRaw ? true : undefined} />
        </Component>
      );
    };
    