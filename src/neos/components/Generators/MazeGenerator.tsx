import { member, Member, Component } from "../../core";
    
    export interface MazeGeneratorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Seed?: member<number>;
Cells?: member<[number, number]>;
WallSize?: member<[number, number]>;
Point0?: member<[number, number]>;
Point1?: member<[number, number]>;
Material?: member<any>;
Bake?: member<boolean>;
    }
    
    export function MazeGenerator(props: MazeGeneratorInput){
      const { id, persistentId, updateOrder, Enabled,
Seed,
Cells,
WallSize,
Point0,
Point1,
Material,
Bake, } = props;
    
      return (
        <Component type="FrooxEngine.MazeGenerator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Seed" id={typeof Seed === "object" && "id" in Seed ? Seed?.id : undefined} value={typeof Seed === "object" && "value" in Seed ? Seed?.value : Seed} /* default: 0 */  isRaw={typeof Seed === "object" && "isRaw" in Seed && Seed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.int2]`} name="Cells" id={typeof Cells === "object" && "id" in Cells ? Cells?.id : undefined} value={typeof Cells === "object" && "value" in Cells ? Cells?.value : Cells} /* default: [0; 0] */  isRaw={typeof Cells === "object" && "isRaw" in Cells && Cells.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="WallSize" id={typeof WallSize === "object" && "id" in WallSize ? WallSize?.id : undefined} value={typeof WallSize === "object" && "value" in WallSize ? WallSize?.value : WallSize} /* default: [0; 0] */  isRaw={typeof WallSize === "object" && "isRaw" in WallSize && WallSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.int2]`} name="Point0" id={typeof Point0 === "object" && "id" in Point0 ? Point0?.id : undefined} value={typeof Point0 === "object" && "value" in Point0 ? Point0?.value : Point0} /* default: [0; 0] */  isRaw={typeof Point0 === "object" && "isRaw" in Point0 && Point0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.int2]`} name="Point1" id={typeof Point1 === "object" && "id" in Point1 ? Point1?.id : undefined} value={typeof Point1 === "object" && "value" in Point1 ? Point1?.value : Point1} /* default: [0; 0] */  isRaw={typeof Point1 === "object" && "isRaw" in Point1 && Point1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MaterialProvider]`} name="Material" id={typeof Material === "object" && "id" in Material ? Material?.id : undefined} value={typeof Material === "object" && "value" in Material ? Material?.value : Material} /* default: ID0 */  isRaw={typeof Material === "object" && "isRaw" in Material && Material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Bake" id={typeof Bake === "object" && "id" in Bake ? Bake?.id : undefined} value={typeof Bake === "object" && "value" in Bake ? Bake?.value : Bake} /* default: false */  isRaw={typeof Bake === "object" && "isRaw" in Bake && Bake.isRaw ? true : undefined} />
        </Component>
      );
    };
    