import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ProjectionSkyboxTemplateInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Name?: member<any>;
ThumbnailTex?: member<any>;
SunEnabled?: member<boolean>;
SunDirection?: member<[number, number, number]>;
SunIntensity?: member<number>;
SunColor?: member<[number, number, number, number]>;
SunShadowIntensity?: member<number>;
MaxIntensity?: member<any>;
Texture?: member<any>;
Exposure?: member<number>;
    }
    
    export function ProjectionSkyboxTemplate(props: ProjectionSkyboxTemplateInput){
      const { id, persistentId, updateOrder, Enabled,
Name,
ThumbnailTex,
SunEnabled,
SunDirection,
SunIntensity,
SunColor,
SunShadowIntensity,
MaxIntensity,
Texture,
Exposure, } = props;
    
      return (
        <Component type="FrooxEngine.ProjectionSkyboxTemplate" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Name" id={typeof Name === "object" && "id" in Name ? Name?.id : undefined} value={typeof Name === "object" && "value" in Name ? Name?.value : Name} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="ThumbnailTex" id={typeof ThumbnailTex === "object" && "id" in ThumbnailTex ? ThumbnailTex?.id : undefined} value={typeof ThumbnailTex === "object" && "value" in ThumbnailTex ? ThumbnailTex?.value : ThumbnailTex} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SunEnabled" id={typeof SunEnabled === "object" && "id" in SunEnabled ? SunEnabled?.id : undefined} value={typeof SunEnabled === "object" && "value" in SunEnabled ? SunEnabled?.value : SunEnabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="SunDirection" id={typeof SunDirection === "object" && "id" in SunDirection ? SunDirection?.id : undefined} value={typeof SunDirection === "object" && "value" in SunDirection ? SunDirection?.value : SunDirection} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SunIntensity" id={typeof SunIntensity === "object" && "id" in SunIntensity ? SunIntensity?.id : undefined} value={typeof SunIntensity === "object" && "value" in SunIntensity ? SunIntensity?.value : SunIntensity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SunColor" id={typeof SunColor === "object" && "id" in SunColor ? SunColor?.id : undefined} value={typeof SunColor === "object" && "value" in SunColor ? SunColor?.value : SunColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SunShadowIntensity" id={typeof SunShadowIntensity === "object" && "id" in SunShadowIntensity ? SunShadowIntensity?.id : undefined} value={typeof SunShadowIntensity === "object" && "value" in SunShadowIntensity ? SunShadowIntensity?.value : SunShadowIntensity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="MaxIntensity" id={typeof MaxIntensity === "object" && "id" in MaxIntensity ? MaxIntensity?.id : undefined} value={typeof MaxIntensity === "object" && "value" in MaxIntensity ? MaxIntensity?.value : MaxIntensity} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Exposure" id={typeof Exposure === "object" && "id" in Exposure ? Exposure?.id : undefined} value={typeof Exposure === "object" && "value" in Exposure ? Exposure?.value : Exposure} /* default: 0 */  />
        </Component>
      );
    };
    