<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from "./icon";
    export default {
        name: 'GluoButton',
        components: {
            'g-icon': Icon
        },
        props:{
            icon:{},
            loading:{
                type: Boolean,
                default: false
            },
            iconPosition:{
                type: String,
                default: 'left',
                validator: function (value) {
                    return !(value !== 'left' && value !== 'right');
                }
            }
        },
        methods:{
            // click(){
            //     this.$emit('click')
            // }
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes spin {
        0%{ transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
    .g-button{display: inline-flex;justify-content: center;align-items: center;font-size: var(--font-size);height:
            var(--button-height);padding: 0 1em;border-radius: var(--button-radius);border: 1px solid var(--border-color);
            background: var(--button-bg); vertical-align: top;
        &:hover{ border-color: var(--border-color-hover);}
        &:active{background-color: var(--button-active-bg);}
        &:focus{outline: none;}
        > .content{order: 2;}
        > .icon{order: 1; margin-right: .3rem}
        &.icon-right{
            > .icon{order: 2;margin-left: .3rem;margin-right: 0;}
            > .content{order: 1;}
        }
        .loading{
            animation: 1.5s spin infinite linear;
        }
    }

</style>