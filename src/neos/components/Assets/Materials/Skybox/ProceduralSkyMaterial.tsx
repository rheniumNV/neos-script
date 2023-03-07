import { member, Member, Component } from "../../../../core";
    
    export interface ProceduralSkyMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
SunQuality?: member<any>;
SunSize?: member<number>;
Sun?: member<any>;
AtmosphereThickness?: member<number>;
SkyTint?: member<[number, number, number, number]>;
GroundColor?: member<[number, number, number, number]>;
Exposure?: member<number>;
    }
    
    export function ProceduralSkyMaterial(props: ProceduralSkyMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
SunQuality,
SunSize,
Sun,
AtmosphereThickness,
SkyTint,
GroundColor,
Exposure, } = props;
    
      return (
        <Component type="FrooxEngine.ProceduralSkyMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ProceduralSkyMaterial+SunType]`} name="SunQuality" id={typeof SunQuality === "object" && "id" in SunQuality ? SunQuality?.id : undefined} value={typeof SunQuality === "object" && "value" in SunQuality ? SunQuality?.value : SunQuality} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SunSize" id={typeof SunSize === "object" && "id" in SunSize ? SunSize?.id : undefined} value={typeof SunSize === "object" && "value" in SunSize ? SunSize?.value : SunSize} /* default: 0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.Light]`} name="Sun" id={typeof Sun === "object" && "id" in Sun ? Sun?.id : undefined} value={typeof Sun === "object" && "value" in Sun ? Sun?.value : Sun} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AtmosphereThickness" id={typeof AtmosphereThickness === "object" && "id" in AtmosphereThickness ? AtmosphereThickness?.id : undefined} value={typeof AtmosphereThickness === "object" && "value" in AtmosphereThickness ? AtmosphereThickness?.value : AtmosphereThickness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SkyTint" id={typeof SkyTint === "object" && "id" in SkyTint ? SkyTint?.id : undefined} value={typeof SkyTint === "object" && "value" in SkyTint ? SkyTint?.value : SkyTint} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="GroundColor" id={typeof GroundColor === "object" && "id" in GroundColor ? GroundColor?.id : undefined} value={typeof GroundColor === "object" && "value" in GroundColor ? GroundColor?.value : GroundColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Exposure" id={typeof Exposure === "object" && "id" in Exposure ? Exposure?.id : undefined} value={typeof Exposure === "object" && "value" in Exposure ? Exposure?.value : Exposure} /* default: 0 */  />
        </Component>
      );
    };
    