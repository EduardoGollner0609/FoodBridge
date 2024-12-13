package com.eduardo.foodbridge.projections;

public interface UserDetailsProjection {
	String getUsername();

	String getPassword();

	Long getRoleId();

	String getAuthority();
}
