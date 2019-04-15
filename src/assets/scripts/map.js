import * as d3 from 'd3'
import members from '../../data/members'

class WebringMap {
    constructor() {
        this.radius = 200
        this.canvasWidth = this.radius * 2 + 32

        this.svg = null
        this.nodes = []

        this.init()
    }

    init() {
        d3.selectAll('svg').remove()
        this.svg = d3
            .select('#map-canvas')
            .append('svg')
            .attr('width', this.canvasWidth)
            .attr('height', this.canvasWidth)

        this.nodes = members.map((member, index) => {
            const angle = (index / (members.length / 2)) * Math.PI
            const x = this.radius * Math.cos(angle) + this.canvasWidth / 2
            const y = this.radius * Math.sin(angle) + this.canvasWidth / 2

            return {
                id: index,
                title: member.title,
                url: member.url,
                x,
                y
            }
        })
    }

    drawCircle() {
        this.svg
            .append('circle')
            .attr('cx', this.canvasWidth / 2)
            .attr('cy', this.canvasWidth / 2)
            .attr('r', this.radius)
            .attr('strokeWidth', 2)
    }

    drawNodes() {
        this.svg
            .selectAll('circle')
            .data(this.nodes)
            .enter()
            .append('circle')
            .attr('r', 10)
            .attr('cx', function(d, i) {
                return d.x
            })
            .attr('cy', function(d, i) {
                return d.y
            })
    }

    draw() {
        this.drawCircle()
        this.drawNodes()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const map = new WebringMap()
    map.draw()
})
