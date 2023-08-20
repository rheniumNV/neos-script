import { member, Member, Component } from "../../../core";
    
    export interface NeosGlowCircleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Radius?: member<number>;
Height?: member<number>;
Color?: member<[number, number, number, number]>;
_cylinderOffset?: member<any>;
_cylinderRadius?: member<any>;
_cylinderHeight?: member<any>;
_circleQuadSize?: member<any>;
_circleTint?: member<any>;
_cylinderTint?: member<any>;
    }
    
    export function NeosGlowCircle(props: NeosGlowCircleInput){
      const { id, persistentId, updateOrder, Enabled,
Radius,
Height,
Color,
_cylinderOffset,
_cylinderRadius,
_cylinderHeight,
_circleQuadSize,
_circleTint,
_cylinderTint, } = props;
    
      return (
        <Component type="FrooxEngine.NeosGlowCircle" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  isRaw={typeof Radius === "object" && "isRaw" in Radius && Radius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Height" id={typeof Height === "object" && "id" in Height ? Height?.id : undefined} value={typeof Height === "object" && "value" in Height ? Height?.value : Height} /* default: 0 */  isRaw={typeof Height === "object" && "isRaw" in Height && Height.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_cylinderOffset" id={typeof _cylinderOffset === "object" && "id" in _cylinderOffset ? _cylinderOffset?.id : undefined} value={typeof _cylinderOffset === "object" && "value" in _cylinderOffset ? _cylinderOffset?.value : _cylinderOffset} /* default: ID0 */  isRaw={typeof _cylinderOffset === "object" && "isRaw" in _cylinderOffset && _cylinderOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_cylinderRadius" id={typeof _cylinderRadius === "object" && "id" in _cylinderRadius ? _cylinderRadius?.id : undefined} value={typeof _cylinderRadius === "object" && "value" in _cylinderRadius ? _cylinderRadius?.value : _cylinderRadius} /* default: ID0 */  isRaw={typeof _cylinderRadius === "object" && "isRaw" in _cylinderRadius && _cylinderRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_cylinderHeight" id={typeof _cylinderHeight === "object" && "id" in _cylinderHeight ? _cylinderHeight?.id : undefined} value={typeof _cylinderHeight === "object" && "value" in _cylinderHeight ? _cylinderHeight?.value : _cylinderHeight} /* default: ID0 */  isRaw={typeof _cylinderHeight === "object" && "isRaw" in _cylinderHeight && _cylinderHeight.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_circleQuadSize" id={typeof _circleQuadSize === "object" && "id" in _circleQuadSize ? _circleQuadSize?.id : undefined} value={typeof _circleQuadSize === "object" && "value" in _circleQuadSize ? _circleQuadSize?.value : _circleQuadSize} /* default: ID0 */  isRaw={typeof _circleQuadSize === "object" && "isRaw" in _circleQuadSize && _circleQuadSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_circleTint" id={typeof _circleTint === "object" && "id" in _circleTint ? _circleTint?.id : undefined} value={typeof _circleTint === "object" && "value" in _circleTint ? _circleTint?.value : _circleTint} /* default: ID0 */  isRaw={typeof _circleTint === "object" && "isRaw" in _circleTint && _circleTint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_cylinderTint" id={typeof _cylinderTint === "object" && "id" in _cylinderTint ? _cylinderTint?.id : undefined} value={typeof _cylinderTint === "object" && "value" in _cylinderTint ? _cylinderTint?.value : _cylinderTint} /* default: ID0 */  isRaw={typeof _cylinderTint === "object" && "isRaw" in _cylinderTint && _cylinderTint.isRaw ? true : undefined} />
        </Component>
      );
    };
    