import { member, Member, Component } from "../../../core";
    
    export interface OutlinedArcInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Arc?: member<number>;
Offset?: member<number>;
OuterRadiusRatio?: member<number>;
InnerRadiusRatio?: member<number>;
FillColor?: member<[number, number, number, number]>;
OutlineColor?: member<[number, number, number, number]>;
OutlineThickness?: member<number>;
Material?: member<any>;
    }
    
    export function OutlinedArc(props: OutlinedArcInput){
      const { id, persistentId, updateOrder, Enabled,
Arc,
Offset,
OuterRadiusRatio,
InnerRadiusRatio,
FillColor,
OutlineColor,
OutlineThickness,
Material, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.OutlinedArc" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Arc" id={typeof Arc === "object" && "id" in Arc ? Arc?.id : undefined} value={typeof Arc === "object" && "value" in Arc ? Arc?.value : Arc} /* default: 0 */  isRaw={typeof Arc === "object" && "isRaw" in Arc && Arc.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: 0 */  isRaw={typeof Offset === "object" && "isRaw" in Offset && Offset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OuterRadiusRatio" id={typeof OuterRadiusRatio === "object" && "id" in OuterRadiusRatio ? OuterRadiusRatio?.id : undefined} value={typeof OuterRadiusRatio === "object" && "value" in OuterRadiusRatio ? OuterRadiusRatio?.value : OuterRadiusRatio} /* default: 0 */  isRaw={typeof OuterRadiusRatio === "object" && "isRaw" in OuterRadiusRatio && OuterRadiusRatio.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InnerRadiusRatio" id={typeof InnerRadiusRatio === "object" && "id" in InnerRadiusRatio ? InnerRadiusRatio?.id : undefined} value={typeof InnerRadiusRatio === "object" && "value" in InnerRadiusRatio ? InnerRadiusRatio?.value : InnerRadiusRatio} /* default: 0 */  isRaw={typeof InnerRadiusRatio === "object" && "isRaw" in InnerRadiusRatio && InnerRadiusRatio.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="FillColor" id={typeof FillColor === "object" && "id" in FillColor ? FillColor?.id : undefined} value={typeof FillColor === "object" && "value" in FillColor ? FillColor?.value : FillColor} /* default: [0; 0; 0; 0] */  isRaw={typeof FillColor === "object" && "isRaw" in FillColor && FillColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="OutlineColor" id={typeof OutlineColor === "object" && "id" in OutlineColor ? OutlineColor?.id : undefined} value={typeof OutlineColor === "object" && "value" in OutlineColor ? OutlineColor?.value : OutlineColor} /* default: [0; 0; 0; 0] */  isRaw={typeof OutlineColor === "object" && "isRaw" in OutlineColor && OutlineColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OutlineThickness" id={typeof OutlineThickness === "object" && "id" in OutlineThickness ? OutlineThickness?.id : undefined} value={typeof OutlineThickness === "object" && "value" in OutlineThickness ? OutlineThickness?.value : OutlineThickness} /* default: 0 */  isRaw={typeof OutlineThickness === "object" && "isRaw" in OutlineThickness && OutlineThickness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="Material" id={typeof Material === "object" && "id" in Material ? Material?.id : undefined} value={typeof Material === "object" && "value" in Material ? Material?.value : Material} /* default: ID0 */  isRaw={typeof Material === "object" && "isRaw" in Material && Material.isRaw ? true : undefined} />
        </Component>
      );
    };
    