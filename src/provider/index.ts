// https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArchiveProviderConfig {
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs#alias ArchiveProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs archive}
*/
export class ArchiveProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "archive";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/archive/2.3.0/docs archive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArchiveProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ArchiveProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'archive',
      terraformGeneratorMetadata: {
        providerName: 'archive',
        providerVersion: '2.3.0',
        providerVersionConstraint: '~> 2.2'
      },
      terraformProviderSource: 'hashicorp/archive'
    });
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
