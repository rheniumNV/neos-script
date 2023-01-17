import { member, Member, Component } from "../../../core";
    
    export interface TextureSizeDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Texture?: member<any>;
Target?: member<any>;
DriveMode?: member<any>;
Premultiply?: member<[number, number]>;
Ratio?: member<[number, number]>;
MaxSize?: member<[number, number]>;
    }
    
    export function TextureSizeDriver(props: TextureSizeDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Texture,
Target,
DriveMode,
Premultiply,
Ratio,
MaxSize, } = props;
    
      return (
        <Component type="FrooxEngine.TextureSizeDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TextureSizeDriver+Mode]`} name="DriveMode" id={typeof DriveMode === "object" && "id" in DriveMode ? DriveMode?.id : undefined} value={typeof DriveMode === "object" && "value" in DriveMode ? DriveMode?.value : DriveMode} /* default: Absolute */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Premultiply" id={typeof Premultiply === "object" && "id" in Premultiply ? Premultiply?.id : undefined} value={typeof Premultiply === "object" && "value" in Premultiply ? Premultiply?.value : Premultiply} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Ratio" id={typeof Ratio === "object" && "id" in Ratio ? Ratio?.id : undefined} value={typeof Ratio === "object" && "value" in Ratio ? Ratio?.value : Ratio} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MaxSize" id={typeof MaxSize === "object" && "id" in MaxSize ? MaxSize?.id : undefined} value={typeof MaxSize === "object" && "value" in MaxSize ? MaxSize?.value : MaxSize} /* default: [0; 0] */  />
        </Component>
      );
    };
    