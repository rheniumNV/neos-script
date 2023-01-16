import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface CameraInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DoubleBuffered?: member<boolean>;
ForwardOnly?: member<boolean>;
Projection?: member<any>;
OrthographicSize?: member<number>;
FieldOfView?: member<number>;
NearClipping?: member<number>;
FarClipping?: member<number>;
UseTransformScale?: member<boolean>;
Clear?: member<any>;
ClearColor?: member<[number, number, number, number]>;
Viewport?: member<any>;
Depth?: member<number>;
RenderTexture?: member<any>;
Postprocessing?: member<boolean>;
ScreenSpaceReflections?: member<boolean>;
MotionBlur?: member<boolean>;
RenderShadows?: member<boolean>;
    }
    
    export function Camera(props: CameraInput){
      const { id, persistentId, updateOrder, Enabled,
DoubleBuffered,
ForwardOnly,
Projection,
OrthographicSize,
FieldOfView,
NearClipping,
FarClipping,
UseTransformScale,
Clear,
ClearColor,
Viewport,
Depth,
RenderTexture,
Postprocessing,
ScreenSpaceReflections,
MotionBlur,
RenderShadows, } = props;
    
      return (
        <Component type="FrooxEngine.Camera" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DoubleBuffered" id={typeof DoubleBuffered === "object" && "id" in DoubleBuffered ? DoubleBuffered?.id : undefined} value={typeof DoubleBuffered === "object" && "value" in DoubleBuffered ? DoubleBuffered?.value : DoubleBuffered} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForwardOnly" id={typeof ForwardOnly === "object" && "id" in ForwardOnly ? ForwardOnly?.id : undefined} value={typeof ForwardOnly === "object" && "value" in ForwardOnly ? ForwardOnly?.value : ForwardOnly} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CameraProjection]`} name="Projection" id={typeof Projection === "object" && "id" in Projection ? Projection?.id : undefined} value={typeof Projection === "object" && "value" in Projection ? Projection?.value : Projection} /* default: Perspective */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OrthographicSize" id={typeof OrthographicSize === "object" && "id" in OrthographicSize ? OrthographicSize?.id : undefined} value={typeof OrthographicSize === "object" && "value" in OrthographicSize ? OrthographicSize?.value : OrthographicSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FieldOfView" id={typeof FieldOfView === "object" && "id" in FieldOfView ? FieldOfView?.id : undefined} value={typeof FieldOfView === "object" && "value" in FieldOfView ? FieldOfView?.value : FieldOfView} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NearClipping" id={typeof NearClipping === "object" && "id" in NearClipping ? NearClipping?.id : undefined} value={typeof NearClipping === "object" && "value" in NearClipping ? NearClipping?.value : NearClipping} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FarClipping" id={typeof FarClipping === "object" && "id" in FarClipping ? FarClipping?.id : undefined} value={typeof FarClipping === "object" && "value" in FarClipping ? FarClipping?.value : FarClipping} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseTransformScale" id={typeof UseTransformScale === "object" && "id" in UseTransformScale ? UseTransformScale?.id : undefined} value={typeof UseTransformScale === "object" && "value" in UseTransformScale ? UseTransformScale?.value : UseTransformScale} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CameraClearMode]`} name="Clear" id={typeof Clear === "object" && "id" in Clear ? Clear?.id : undefined} value={typeof Clear === "object" && "value" in Clear ? Clear?.value : Clear} /* default: Skybox */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="ClearColor" id={typeof ClearColor === "object" && "id" in ClearColor ? ClearColor?.id : undefined} value={typeof ClearColor === "object" && "value" in ClearColor ? ClearColor?.value : ClearColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.Rect]`} name="Viewport" id={typeof Viewport === "object" && "id" in Viewport ? Viewport?.id : undefined} value={typeof Viewport === "object" && "value" in Viewport ? Viewport?.value : Viewport} /* default: [X=0; Y=0; W=0; H=0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Depth" id={typeof Depth === "object" && "id" in Depth ? Depth?.id : undefined} value={typeof Depth === "object" && "value" in Depth ? Depth?.value : Depth} /* default: 0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.RenderTexture]`} name="RenderTexture" id={typeof RenderTexture === "object" && "id" in RenderTexture ? RenderTexture?.id : undefined} value={typeof RenderTexture === "object" && "value" in RenderTexture ? RenderTexture?.value : RenderTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Postprocessing" id={typeof Postprocessing === "object" && "id" in Postprocessing ? Postprocessing?.id : undefined} value={typeof Postprocessing === "object" && "value" in Postprocessing ? Postprocessing?.value : Postprocessing} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ScreenSpaceReflections" id={typeof ScreenSpaceReflections === "object" && "id" in ScreenSpaceReflections ? ScreenSpaceReflections?.id : undefined} value={typeof ScreenSpaceReflections === "object" && "value" in ScreenSpaceReflections ? ScreenSpaceReflections?.value : ScreenSpaceReflections} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="MotionBlur" id={typeof MotionBlur === "object" && "id" in MotionBlur ? MotionBlur?.id : undefined} value={typeof MotionBlur === "object" && "value" in MotionBlur ? MotionBlur?.value : MotionBlur} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RenderShadows" id={typeof RenderShadows === "object" && "id" in RenderShadows ? RenderShadows?.id : undefined} value={typeof RenderShadows === "object" && "value" in RenderShadows ? RenderShadows?.value : RenderShadows} /* default: false */  />
        </Component>
      );
    };
    