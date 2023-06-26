module.exports = (sequelize, DataTypes) => {
    const FoodNutrients = sequelize.define("FoodNutrients", {
        
        food_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        food_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,

        },

        energy: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },

        vitamin_a: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: null,
        }


    });

    return FoodNutrients;
}