import { member, Member, Component } from "../../core";
    
    export interface MultiTextureFader_AInput {
        type:{A: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
FirstTexture?: member<any>;
SecondTexture?: member<any>;
Lerp?: member<any>;
Position?: member<number>;
    }
    
    export function MultiTextureFader_A(props: MultiTextureFader_AInput){
      const {type:{A:{name: A},}, id, persistentId, updateOrder, Enabled,
FirstTexture,
SecondTexture,
Lerp,
Position, } = props;
    
      return (
        <Component type={`FrooxEngine.MultiTextureFader\`1[${[A,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.AssetRef\`1[A]]`} name="FirstTexture" id={typeof FirstTexture === "object" && "id" in FirstTexture ? FirstTexture?.id : undefined} value={typeof FirstTexture === "object" && "value" in FirstTexture ? FirstTexture?.value : FirstTexture} /* default: null */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.AssetRef\`1[A]]`} name="SecondTexture" id={typeof SecondTexture === "object" && "id" in SecondTexture ? SecondTexture?.id : undefined} value={typeof SecondTexture === "object" && "value" in SecondTexture ? SecondTexture?.value : SecondTexture} /* default: null */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="Lerp" id={typeof Lerp === "object" && "id" in Lerp ? Lerp?.id : undefined} value={typeof Lerp === "object" && "value" in Lerp ? Lerp?.value : Lerp} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Position" id={typeof Position === "object" && "id" in Position ? Position?.id : undefined} value={typeof Position === "object" && "value" in Position ? Position?.value : Position} /* default: null */  />
        </Component>
      );
    };
    