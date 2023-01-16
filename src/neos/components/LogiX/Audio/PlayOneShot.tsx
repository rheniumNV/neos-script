import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface PlayOneShotInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Clip?: member<any>;
Volume?: member<any>;
Speed?: member<any>;
Spatialize?: member<any>;
SpatialBlend?: member<any>;
Point?: member<any>;
Root?: member<any>;
Priority?: member<any>;
Doppler?: member<any>;
MinDistance?: member<any>;
MaxDistance?: member<any>;
Rolloff?: member<any>;
Group?: member<any>;
DistanceSpace?: member<any>;
MinScale?: member<any>;
MaxScale?: member<any>;
ParentUnderRoot?: member<any>;
LocalOnly?: member<any>;
OnStartedPlaying?: member<any>;
    }
    
    export function PlayOneShot(props: PlayOneShotInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Clip,
Volume,
Speed,
Spatialize,
SpatialBlend,
Point,
Root,
Priority,
Doppler,
MinDistance,
MaxDistance,
Rolloff,
Group,
DistanceSpace,
MinScale,
MaxScale,
ParentUnderRoot,
LocalOnly,
OnStartedPlaying, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Audio.PlayOneShot" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IAssetProvider\`1[FrooxEngine.AudioClip]]`} name="Clip" id={typeof Clip === "object" && "id" in Clip ? Clip?.id : undefined} value={typeof Clip === "object" && "value" in Clip ? Clip?.value : Clip} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Volume" id={typeof Volume === "object" && "id" in Volume ? Volume?.id : undefined} value={typeof Volume === "object" && "value" in Volume ? Volume?.value : Volume} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Speed" id={typeof Speed === "object" && "id" in Speed ? Speed?.id : undefined} value={typeof Speed === "object" && "value" in Speed ? Speed?.value : Speed} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Spatialize" id={typeof Spatialize === "object" && "id" in Spatialize ? Spatialize?.id : undefined} value={typeof Spatialize === "object" && "value" in Spatialize ? Spatialize?.value : Spatialize} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="SpatialBlend" id={typeof SpatialBlend === "object" && "id" in SpatialBlend ? SpatialBlend?.id : undefined} value={typeof SpatialBlend === "object" && "value" in SpatialBlend ? SpatialBlend?.value : SpatialBlend} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Point" id={typeof Point === "object" && "id" in Point ? Point?.id : undefined} value={typeof Point === "object" && "value" in Point ? Point?.value : Point} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Root" id={typeof Root === "object" && "id" in Root ? Root?.id : undefined} value={typeof Root === "object" && "value" in Root ? Root?.value : Root} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Priority" id={typeof Priority === "object" && "id" in Priority ? Priority?.id : undefined} value={typeof Priority === "object" && "value" in Priority ? Priority?.value : Priority} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Doppler" id={typeof Doppler === "object" && "id" in Doppler ? Doppler?.id : undefined} value={typeof Doppler === "object" && "value" in Doppler ? Doppler?.value : Doppler} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="MinDistance" id={typeof MinDistance === "object" && "id" in MinDistance ? MinDistance?.id : undefined} value={typeof MinDistance === "object" && "value" in MinDistance ? MinDistance?.value : MinDistance} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.AudioRolloffMode]`} name="Rolloff" id={typeof Rolloff === "object" && "id" in Rolloff ? Rolloff?.id : undefined} value={typeof Rolloff === "object" && "value" in Rolloff ? Rolloff?.value : Rolloff} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.AudioTypeGroup]`} name="Group" id={typeof Group === "object" && "id" in Group ? Group?.id : undefined} value={typeof Group === "object" && "value" in Group ? Group?.value : Group} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.AudioDistanceSpace]`} name="DistanceSpace" id={typeof DistanceSpace === "object" && "id" in DistanceSpace ? DistanceSpace?.id : undefined} value={typeof DistanceSpace === "object" && "value" in DistanceSpace ? DistanceSpace?.value : DistanceSpace} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="MinScale" id={typeof MinScale === "object" && "id" in MinScale ? MinScale?.id : undefined} value={typeof MinScale === "object" && "value" in MinScale ? MinScale?.value : MinScale} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="MaxScale" id={typeof MaxScale === "object" && "id" in MaxScale ? MaxScale?.id : undefined} value={typeof MaxScale === "object" && "value" in MaxScale ? MaxScale?.value : MaxScale} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="ParentUnderRoot" id={typeof ParentUnderRoot === "object" && "id" in ParentUnderRoot ? ParentUnderRoot?.id : undefined} value={typeof ParentUnderRoot === "object" && "value" in ParentUnderRoot ? ParentUnderRoot?.value : ParentUnderRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="LocalOnly" id={typeof LocalOnly === "object" && "id" in LocalOnly ? LocalOnly?.id : undefined} value={typeof LocalOnly === "object" && "value" in LocalOnly ? LocalOnly?.value : LocalOnly} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnStartedPlaying" id={typeof OnStartedPlaying === "object" && "id" in OnStartedPlaying ? OnStartedPlaying?.id : undefined} value={typeof OnStartedPlaying === "object" && "value" in OnStartedPlaying ? OnStartedPlaying?.value : OnStartedPlaying} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    