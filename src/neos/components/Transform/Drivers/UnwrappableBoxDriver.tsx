import { member, Member, Component } from "../../../core";
    
    export interface UnwrappableBoxDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Unwrap?: member<number>;
SideSize?: member<number>;
ScaleContent?: member<boolean>;
_side0rotation?: member<any>;
_side1rotation?: member<any>;
_side2rotation?: member<any>;
_side3rotation?: member<any>;
_topRotation?: member<any>;
_side0offset?: member<any>;
_side1offset?: member<any>;
_side2offset?: member<any>;
_side3offset?: member<any>;
_topOffset?: member<any>;
_side0contentOffset?: member<any>;
_side1contentOffset?: member<any>;
_side2contentOffset?: member<any>;
_side3contentOffset?: member<any>;
_topContentOffset?: member<any>;
_side0contentScale?: member<any>;
_side1contentScale?: member<any>;
_side2contentScale?: member<any>;
_side3contentScale?: member<any>;
_bottomContentScale?: member<any>;
_topContentScale?: member<any>;
    }
    
    export function UnwrappableBoxDriver(props: UnwrappableBoxDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Unwrap,
SideSize,
ScaleContent,
_side0rotation,
_side1rotation,
_side2rotation,
_side3rotation,
_topRotation,
_side0offset,
_side1offset,
_side2offset,
_side3offset,
_topOffset,
_side0contentOffset,
_side1contentOffset,
_side2contentOffset,
_side3contentOffset,
_topContentOffset,
_side0contentScale,
_side1contentScale,
_side2contentScale,
_side3contentScale,
_bottomContentScale,
_topContentScale, } = props;
    
      return (
        <Component type="FrooxEngine.UnwrappableBoxDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Unwrap" id={typeof Unwrap === "object" && "id" in Unwrap ? Unwrap?.id : undefined} value={typeof Unwrap === "object" && "value" in Unwrap ? Unwrap?.value : Unwrap} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SideSize" id={typeof SideSize === "object" && "id" in SideSize ? SideSize?.id : undefined} value={typeof SideSize === "object" && "value" in SideSize ? SideSize?.value : SideSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ScaleContent" id={typeof ScaleContent === "object" && "id" in ScaleContent ? ScaleContent?.id : undefined} value={typeof ScaleContent === "object" && "value" in ScaleContent ? ScaleContent?.value : ScaleContent} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_side0rotation" id={typeof _side0rotation === "object" && "id" in _side0rotation ? _side0rotation?.id : undefined} value={typeof _side0rotation === "object" && "value" in _side0rotation ? _side0rotation?.value : _side0rotation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_side1rotation" id={typeof _side1rotation === "object" && "id" in _side1rotation ? _side1rotation?.id : undefined} value={typeof _side1rotation === "object" && "value" in _side1rotation ? _side1rotation?.value : _side1rotation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_side2rotation" id={typeof _side2rotation === "object" && "id" in _side2rotation ? _side2rotation?.id : undefined} value={typeof _side2rotation === "object" && "value" in _side2rotation ? _side2rotation?.value : _side2rotation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_side3rotation" id={typeof _side3rotation === "object" && "id" in _side3rotation ? _side3rotation?.id : undefined} value={typeof _side3rotation === "object" && "value" in _side3rotation ? _side3rotation?.value : _side3rotation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_topRotation" id={typeof _topRotation === "object" && "id" in _topRotation ? _topRotation?.id : undefined} value={typeof _topRotation === "object" && "value" in _topRotation ? _topRotation?.value : _topRotation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_side0offset" id={typeof _side0offset === "object" && "id" in _side0offset ? _side0offset?.id : undefined} value={typeof _side0offset === "object" && "value" in _side0offset ? _side0offset?.value : _side0offset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_side1offset" id={typeof _side1offset === "object" && "id" in _side1offset ? _side1offset?.id : undefined} value={typeof _side1offset === "object" && "value" in _side1offset ? _side1offset?.value : _side1offset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_side2offset" id={typeof _side2offset === "object" && "id" in _side2offset ? _side2offset?.id : undefined} value={typeof _side2offset === "object" && "value" in _side2offset ? _side2offset?.value : _side2offset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_side3offset" id={typeof _side3offset === "object" && "id" in _side3offset ? _side3offset?.id : undefined} value={typeof _side3offset === "object" && "value" in _side3offset ? _side3offset?.value : _side3offset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_topOffset" id={typeof _topOffset === "object" && "id" in _topOffset ? _topOffset?.id : undefined} value={typeof _topOffset === "object" && "value" in _topOffset ? _topOffset?.value : _topOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_side0contentOffset" id={typeof _side0contentOffset === "object" && "id" in _side0contentOffset ? _side0contentOffset?.id : undefined} value={typeof _side0contentOffset === "object" && "value" in _side0contentOffset ? _side0contentOffset?.value : _side0contentOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_side1contentOffset" id={typeof _side1contentOffset === "object" && "id" in _side1contentOffset ? _side1contentOffset?.id : undefined} value={typeof _side1contentOffset === "object" && "value" in _side1contentOffset ? _side1contentOffset?.value : _side1contentOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_side2contentOffset" id={typeof _side2contentOffset === "object" && "id" in _side2contentOffset ? _side2contentOffset?.id : undefined} value={typeof _side2contentOffset === "object" && "value" in _side2contentOffset ? _side2contentOffset?.value : _side2contentOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_side3contentOffset" id={typeof _side3contentOffset === "object" && "id" in _side3contentOffset ? _side3contentOffset?.id : undefined} value={typeof _side3contentOffset === "object" && "value" in _side3contentOffset ? _side3contentOffset?.value : _side3contentOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_topContentOffset" id={typeof _topContentOffset === "object" && "id" in _topContentOffset ? _topContentOffset?.id : undefined} value={typeof _topContentOffset === "object" && "value" in _topContentOffset ? _topContentOffset?.value : _topContentOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_side0contentScale" id={typeof _side0contentScale === "object" && "id" in _side0contentScale ? _side0contentScale?.id : undefined} value={typeof _side0contentScale === "object" && "value" in _side0contentScale ? _side0contentScale?.value : _side0contentScale} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_side1contentScale" id={typeof _side1contentScale === "object" && "id" in _side1contentScale ? _side1contentScale?.id : undefined} value={typeof _side1contentScale === "object" && "value" in _side1contentScale ? _side1contentScale?.value : _side1contentScale} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_side2contentScale" id={typeof _side2contentScale === "object" && "id" in _side2contentScale ? _side2contentScale?.id : undefined} value={typeof _side2contentScale === "object" && "value" in _side2contentScale ? _side2contentScale?.value : _side2contentScale} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_side3contentScale" id={typeof _side3contentScale === "object" && "id" in _side3contentScale ? _side3contentScale?.id : undefined} value={typeof _side3contentScale === "object" && "value" in _side3contentScale ? _side3contentScale?.value : _side3contentScale} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_bottomContentScale" id={typeof _bottomContentScale === "object" && "id" in _bottomContentScale ? _bottomContentScale?.id : undefined} value={typeof _bottomContentScale === "object" && "value" in _bottomContentScale ? _bottomContentScale?.value : _bottomContentScale} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_topContentScale" id={typeof _topContentScale === "object" && "id" in _topContentScale ? _topContentScale?.id : undefined} value={typeof _topContentScale === "object" && "value" in _topContentScale ? _topContentScale?.value : _topContentScale} /* default: ID0 */  />
        </Component>
      );
    };
    